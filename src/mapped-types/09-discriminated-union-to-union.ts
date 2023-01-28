type Fruit =
  | {
  name: 'apple'
  color: 'red'
}
  | {
  name: 'banana'
  color: 'yellow'
}
  | {
  name: 'orange'
  color: 'orange'
}

type X = {
  [K in keyof Fruit]: Fruit[K]
}[keyof Fruit]

// common properties
type Y = keyof Fruit

type TransformedFruit = {
  [F in Fruit as F['name']]: `${F['name']}:${F['color']}`
}[Fruit['name']]

// 1. using iterator to create an object
// 2. remapping it to a different object
// 3. iterating over its values
