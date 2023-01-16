type GetDataValue1<T> = T extends { data: any } ? T['data'] : never;
type GetDataValue2<T extends { data: any }> = T['data']
// infer only use in conditional type
type GetDataValue<T> = T extends { data: infer TData } ? TData : never;

//type tests = [
//   Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
//   Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
//   Expect<
//     Equal<
//       GetDataValue<{ data: { name: "hello"; age: 20 } }>,
//       { name: "hello"; age: 20 }
//     >
//   >
// ];

type X = GetDataValue1<{ data: { a: number, b: string } }>
type Y = GetDataValue<{ data: { a: number, b: string } }>
type X1 = GetDataValue2<{ data: { a: number, b: string } }>

