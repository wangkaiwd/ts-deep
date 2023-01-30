interface Attributes {
  id: string;
  email: string;
  username: string;
}

type MutuallyExclusive<T> = {
  [K in keyof T]: Record<K, T[K]>;
}[keyof T];

type X = MutuallyExclusive<Attributes>

// { id: string } | { email: string } | { username: string }

type Y<T extends object> = {
  [K in keyof T]: Record<K, T[K]>
}[keyof T]

type X1 = Y<Attributes>
