const sum = <T> (array: readonly T[], mapper: (item: T) => number): number =>
  array.reduce((acc, item) => acc + mapper(item), 0);
const arr = ['1', '2', '5'];

const result = sum(arr, (item) => {
  return parseInt(item);
});
