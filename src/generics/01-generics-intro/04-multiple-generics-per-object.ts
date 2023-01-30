interface Params<A, B> {
  a: A,
  b: B
}

// type vs interface
// https://stackoverflow.com/a/52682220/12819402
type Params1<A, B> = {
  a: A,
  b: B
}

const returnBothOfWhatIPassIn = <A, B> (params: Params<A, B>) => {
  return {
    first: params.a,
    second: params.b,
  };
};

const result = returnBothOfWhatIPassIn({ a: 'a', b: 1 });
