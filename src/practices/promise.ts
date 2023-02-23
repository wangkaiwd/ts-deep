type State = 'fulfilled' | 'rejected' | 'pending'
type Resolve = (value: any) => void
type Reject = (reason: any) => void

class MyPromise {
  state: State = 'pending';
  value: any;
  reason: any;
  resolve: Resolve = (value) => {
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

  constructor (executor: (resolve: Resolve, reject: Reject) => void) {
    executor(this.resolve, this.reject);
  }

  then (resolveFn: any, rejectFn?: any) {
    if (!resolveFn) {
      resolveFn = (value: any) => value;
    }
    if (!rejectFn) {
      rejectFn = (reason: any) => {throw reason;};
    }
    return new MyPromise((resolve, reject) => {
      if (this.state === 'pending') {
        this.resolveFns.push((value: any) => {
          queueMicrotask(() => {
            const result = resolveFn(value);
            resolve(result);
          });
        });
        this.rejectFns.push((reason: any) => {
          queueMicrotask(() => {
            try {
              const result = rejectFn(reason);
              resolve(result);
            } catch (e) {
              reject(e);
            }
          });
        });
      } else if (this.state === 'fulfilled') {
        queueMicrotask(() => {
          const result = resolveFn(this.value);
          resolve(result);
        });
      } else {
        queueMicrotask(() => {
          try {
            const result = rejectFn(this.reason);
            resolve(result);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
  }
}

export default MyPromise;
