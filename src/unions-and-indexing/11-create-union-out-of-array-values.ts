const fruits = ['apple', 'banana', 'orange'] as const;

type Fruits = typeof fruits

type Fruit = Fruits[number]
type AppleOrBanana = Exclude<Fruit, 'orange'>
type AppleOrBanana1 = Fruits[0 | 1]

