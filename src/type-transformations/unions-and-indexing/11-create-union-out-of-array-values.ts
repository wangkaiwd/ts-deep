const fruits = ['apple', 'banana', 'orange'] as const;

type Fruits = typeof fruits

type Fruit = Fruits[number]
type AppleOrBanana = Exclude<Fruit, 'orange'>
type AppleOrBanana1 = Fruits[0 | 1]

const array = [{ type: 1, name: '2' }, { type: 2, name: '2' }] as const;

type X = typeof array[number]['type']
