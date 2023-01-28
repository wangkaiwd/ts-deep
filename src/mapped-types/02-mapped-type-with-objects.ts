interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributesKeys = keyof Attributes

type AttributeGetters = {
  [K in AttributesKeys]: () => Attributes[K]
};
