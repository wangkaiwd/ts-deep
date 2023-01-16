## Record

* [Awaited](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)
* Extract member from discriminated union
  with [`Extract`](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union) utility type
* [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content)
  * get all literal object's values
  * get all literal array's values
* [Literal Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
  * Extracting string pattern matches with template literals
* Empty object represent anything that is not null or undefined
  * NonNullable
* [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
  * [extract union strings with matching pattern](https://github.com/wangkaiwd/ts-deep/blob/main/src/template-literals/02-extract-union-strings-matching-pattern.ts)
  * [create union of strings with all possible permutations of two union](https://github.com/wangkaiwd/ts-deep/blob/main/src/template-literals/03-create-union-of-strings-with-all-possible-permutations-of-two-union.ts)
  * Record [first generic argument](https://github.com/wangkaiwd/ts-deep/blob/main/src/template-literals/05-create-object-keys-derived-from-union.ts)
  is a set of properties `K`
* The pattern of returning `never` allows our conditional types to specify their "else" logic without worry too much about what it is. If you try to use something that's been typed as `never` you will get an error
