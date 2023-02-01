type GreetingResult<TGreeting> = TGreeting extends 'hello' ? 'goodbye' : 'hello'

function youSayGoodbyeISayHello<TGreeting extends 'hello' | 'goodbye'> (greeting: TGreeting): TGreeting extends 'hello' ? 'goodbye' : 'hello' {
  return greeting === 'goodbye' ? 'hello' : 'goodbye' as any;
}

const result = youSayGoodbyeISayHello('hello');
