type NonEmptyArray<T = any> = [T, ...T[]];

const array: NonEmptyArray<number> = [1];
