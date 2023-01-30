import type { Split } from 'ts-toolbelt/out/String/Split.js';

type UserPath = 'users/:id'
// {id: string}

// small application scenario
// type A<T> = T extends `${string}/:${infer Y}` ? { [K in Y]: string } : never
type A<T> = T extends `${string}/:${infer Y}` ? Record<Y, string> : never

// type ExtractPathParams<TPath extends string> = {
//   [K in Split<TPath, '/'>[number] as K extends `:${infer P}`
//     ? P
//     : never]: string;
// };

type ExtractPathParams1<TPath extends string> = {
  [K in Split<TPath, '/'>[number] as K extends `:${infer P}` ? P : never]: string
}

// type B = ExtractPathParams<UserPath>

type B1 = ExtractPathParams1<UserPath>
