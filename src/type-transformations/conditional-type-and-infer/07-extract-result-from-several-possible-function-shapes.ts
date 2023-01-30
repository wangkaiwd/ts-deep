const parser1 = {
  parse: () => 1,
};

const parser2 = () => '123';

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends {
    parse: () => infer TResult
  }
  ? TResult
  : T extends () => infer TResult
    ? TResult
    : T extends {
        extract: () => infer TResult
      }
      ? TResult
      : never

type GetParserResult1<T> = T extends { parse: () => infer TResult }
  // function type need parenthesis
  | (() => infer TResult)
  | { extract: () => infer TResult }
  ? TResult
  : never

// number, string, boolean
