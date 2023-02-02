interface Person {
  age: number;
  name: string;
  birthdate: Date;
}

function remapPerson<Key extends keyof Person> (
  key: Key,
  value: Person[Key],
): Person[Key] {
  if (key === 'birthdate') {
    // TypeScript can't narrow the return type inside of a generic function
    // The return type will be resolved as never
    return new Date() as Person[Key];
  }

  return value;
}

const a = remapPerson('age', 123123);

const b = remapPerson('birthdate', new Date());
