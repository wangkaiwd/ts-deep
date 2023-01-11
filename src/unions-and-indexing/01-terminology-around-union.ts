// common properties show up in any union
type A =
  | {
  type: 'a';
  a: string;
}
  | {
  type: 'b';
  b: string;
}
  | {
  type: 'c';
  c: string;
};

type B = 'a' | 'b' | 'c';

enum C {
  A = 'a',
  B = 'b',
  C = 'c',
}
