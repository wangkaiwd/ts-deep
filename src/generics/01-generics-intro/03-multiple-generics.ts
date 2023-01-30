const returnBothOfWhatIPassIn = <T, S> (a: T, b: S) => {
  return {
    a,
    b,
  };
};
// generic don't have default value, why don't need pass generic parameter ?
const result = returnBothOfWhatIPassIn('a', 1);
