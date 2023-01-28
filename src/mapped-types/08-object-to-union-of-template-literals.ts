interface FruitMap {
  apple: 'red';
  banana: 'yellow';
  orange: 'orange';
}

type KeyOfFruitMap = keyof FruitMap

type TransformedFruit = {
  [K in KeyOfFruitMap]: `${K}:${FruitMap[K]}`
}[KeyOfFruitMap];

// "apple:red" | "banana:yellow" | "orange:orange"
