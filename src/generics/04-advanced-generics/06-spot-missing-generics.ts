const getValue = <TObj, Key extends keyof TObj> (obj: TObj, key: Key) => {
  return obj[key];
};

const obj = {
  a: 1,
  b: 'some-string',
  c: true,
};

const v = getValue(obj, 'a');

// type Result = typeof obj['a' | 'b' | 'c']
