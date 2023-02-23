type State = 'fulfilled' | 'rejected' | 'pending'
type Resolve<T> = (value: T) => void
type Reject = (reason: any) => void
type ResolveFn<T, TResult> = (value: T) => TResult
type RejectFn<T> = (reason: any) => T
const isFunction = (value: any): value is ((...args: any[]) => any) => typeof value === 'function';

class MyPromise<T> {
  state: State = 'pending';
  value: T | undefined = undefined;
  reason: any;
  resolve: Resolve<T> = (value) => {
    this.state = 'fulfilled';
    this.value = value;
    this.resolveFns.forEach((fn) => {
      fn(value);
    });
  };
  resolveFns: any[] = [];
  rejectFns: any[] = [];
  reject: Reject = (reason) => {
    this.state = 'rejected';
    this.reason = reason;
    this.rejectFns.forEach((fn) => {
      fn(reason);
    });
  };

  constructor (executor: (resolve: Resolve<T>, reject: Reject) => void) {
    executor(this.resolve, this.reject);
  }

  then<TResult = T, TResult2 = never> (resolveFn?: ResolveFn<T, TResult> | undefined | null, rejectFn?: RejectFn<TResult2> | undefined | null) {
    return new MyPromise<TResult | TResult2>((resolve, reject) => {
      if (this.state === 'pending') {
        this.resolveFns.push((value: T) => {
          queueMicrotask(() => {
            if (isFunction(resolveFn)) {
              const result = resolveFn(value);
              resolve(result);
            } else {
              resolve(value as any);
            }
          });
        });
        this.rejectFns.push((reason: any) => {
          queueMicrotask(() => {
            try {
              if (isFunction(rejectFn)) {
                const result = rejectFn(reason);
                resolve(result);
              } else {
                reject(reason);
              }
            } catch (e) {
              reject(e);
            }
          });
        });
      } else if (this.state === 'fulfilled') {
        queueMicrotask(() => {
          if (isFunction(resolveFn)) {
            const result = resolveFn(this.value as any);
            resolve(result);
          } else {
            resolve(this.value as any);
          }
        });
      } else {
        queueMicrotask(() => {
          try {
            if (isFunction(rejectFn)) {
              const result = rejectFn(this.reason);
              resolve(result);
            } else {
              reject(this.reason);
            }
          } catch (e) {
            reject(e);
          }
        });
      }
    });
  }
}

export default MyPromise;
