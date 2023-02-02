const returnBothOfWhatIPassIn = <TParams extends { a: unknown; b: unknown }> (params: TParams): [TParams['a'], TParams['b']] => {
  return [params.a, params.b];
};

const x = returnBothOfWhatIPassIn({ a: 'a', b: 1 });

const returnBothOfWhatIPassIn1 = <A, B> (params: { a: A, b: B }): [A, B] => {
  return [params.a, params.b];
};

const x1 = returnBothOfWhatIPassIn1({ a: 'a', b: 1 });
