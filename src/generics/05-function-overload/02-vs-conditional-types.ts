// // overload signature
function youSayGoodbyeISayHello (greeting: 'hello'): 'goodbye'
function youSayGoodbyeISayHello (greeting: 'goodbye'): 'hello'
//
// // implement signature
// // the signature of implementation is not visible from outside.
// // the implementation signature must also be compatible with overload signature
// function youSayGoodbyeISayHello (greeting: 'hello' | 'goodbye') {
//   return greeting === 'goodbye' ? 'hello' : 'goodbye';
// }

// add return types to original function
// make function overloads more type safe
function youSayGoodbyeISayHello (greeting: 'hello' | 'goodbye'): 'hello' | 'goodbye' {
  return greeting === 'goodbye' ? 'hello' : 'goodbye';
}

const x = youSayGoodbyeISayHello('hello');

