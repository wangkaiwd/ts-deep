interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
  groupIdName: string;
}

type SearchById = `${string}${'id' | 'Id'}${string}`

type OnlyIdKeys<T> = {
  [K in keyof T as K extends SearchById ? K : never]: T[K]
}

type Y = Extract<keyof Example, `${string}${'id' | 'Id'}${string}`>
type X = OnlyIdKeys<Example>
