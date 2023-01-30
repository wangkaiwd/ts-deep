type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};
// type DeepPartial<T> = {
//   [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
// }
//
// type X = DeepPartial<MyType>

// const x: X = {
//   a: 'a',
//   c: {
//     d: 'd',
//     e: {
//       g: [undefined]
//     }
//   }
// };

type DeepPartial1<T> = { [K in keyof T]?: DeepPartial1<T[K]> };

type X1 = DeepPartial1<MyType>

type A = {
  [K in keyof string]: string
}

// const x1: X1 = {
//   a: 'a',
//   c: {
//     d: 'd',
//     e: {
//       g: [undefined]
//     }
//   }
// };

type DeepPartial2<T> = T extends Array<infer U>
  ? Array<DeepPartial2<U>>
  : { [K in keyof T]?: DeepPartial2<T[K]> };

const x2: DeepPartial2<MyType> = {
  a: 'a',
  c: {
    d: 'd',
    e: {
      g: [{ i: 'i' }]
    }
  }
};
