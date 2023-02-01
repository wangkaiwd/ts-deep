const array = [
  {
    name: 'John',
  },
  {
    name: 'Steve',
  },
];

// type argument infer from initial value
const obj = array.reduce<{ [k: string]: { name: string } }>((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {});

const object = {
  a: {
    b: {
      c: 'c'
    }
  }
};

const arr = ['a', 'b', 'c'];
const result = arr.reduce((accum, item) => {
  return (accum as any)[item];
}, object);

console.log('result', result);
