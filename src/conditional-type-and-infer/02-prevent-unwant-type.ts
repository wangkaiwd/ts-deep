type HelloOrGoodbye = 'hello' | 'goodbye'

type YouSayGoodbyeAndISayHello<T> = T extends HelloOrGoodbye ? T extends 'hello' ? 'goodbye' : 'hello' : never;

type A = YouSayGoodbyeAndISayHello<'goodbye'>
type B = YouSayGoodbyeAndISayHello<'hello'>
// todo: Why this get a union ? Is this a distributive conditional types ?
type C = YouSayGoodbyeAndISayHello<any>
// The pattern of returning never allows our conditional types to specify their "else" logic without worry too much about what it is.
// If you try to use something that's been typed as never you will get an error.
type D = YouSayGoodbyeAndISayHello<'a'>

type Hello = 'hello'
type Goodbye = 'goodbye'

type YouSayGoodbyeAndISayHello1<T extends Hello | Goodbye> = T extends Hello ? Goodbye : Hello;

type E = YouSayGoodbyeAndISayHello1<Hello>
