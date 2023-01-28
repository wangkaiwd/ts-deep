interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type KeysFromValues = keyof Values;
type ValuesAsUnionOfTuples = {
  [K in KeysFromValues]: [K, Values[K]]
}[KeysFromValues]

// ['email', string] | ['firstName', string] | ['lastName', string],
