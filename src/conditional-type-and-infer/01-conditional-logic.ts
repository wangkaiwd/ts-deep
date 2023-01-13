type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'hello' : 'goodbye';

type A = YouSayGoodbyeAndISayHello<'goodbye'>
type B = YouSayGoodbyeAndISayHello<'hello'>
