type Fruit = 'apple' | 'banana' | 'orange'

type GetAppleOrBanana<T> = T extends 'apple' | 'banana' ? T : never

//  Generic
type AppleOrBanana1 = GetAppleOrBanana<Fruit>

// Infer
// todo: How to understand this resolution ?
type AppleOrBanana2 = Fruit extends infer T
  ? T extends 'apple' | 'banana'
    ? T
    : never
  : never

// distributivity act on generic
// this will get an error
type AppleOrBanana = Fruit extends 'apple' | 'banana' ? Fruit : never

// Fails
// type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>]
