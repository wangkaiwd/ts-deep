const makeSafe =
  <TParam extends any[], TReturn> (func: (...args: TParam) => TReturn) =>
    (...args: TParam):
      | { type: 'success'; result: TReturn; }
      | { type: 'failure'; error: Error; } => {
      try {
        const result = func(...args);

        return {
          type: 'success',
          result,
        };
      } catch (e) {
        return {
          type: 'failure',
          error: e as Error,
        };
      }
    };

const func = makeSafe((a: number, b: string) => {
  return `${a} ${b}`;
});

const x = func(1, '1');

const makeSafe1 =
  <TFunc extends (...args: any[]) => any> (func: TFunc) =>
    (
      ...args: Parameters<TFunc>
    ):
      | {
      type: 'success';
      result: ReturnType<TFunc>;
    }
      | {
      type: 'failure';
      error: Error;
    } => {
      try {
        const result = func(...args);

        return {
          type: 'success',
          result,
        };
      } catch (e) {
        return {
          type: 'failure',
          error: e as Error,
        };
      }
    };

const func1 = makeSafe1((a: number, b: string) => {
  return `${a} ${b}`;
});

const x1 = func1(1, '1');

if (x1.type === 'success') {
  console.log(x1.result);
}

const myBind = <TFn extends (...args: any[]) => any, TContext extends null | object> (fn: TFn, context: TContext, ...outerArgs: any[]) => {
  return (...innerArgs: any[]) => {
    return fn.call(context, ...outerArgs, ...innerArgs);
  };
};

const tempFn = (a: number, b: string, c: number) => {
  return `${a} ${b}`;
};
const fn = myBind(tempFn, null, 1);

// todo: how to understand bind type
const xx = tempFn.bind(null, 1, 'b');

