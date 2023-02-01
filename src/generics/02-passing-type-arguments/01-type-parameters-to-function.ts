const createSet = <T> () => { return new Set<T>(); };
const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();

const createSet1 = <T> (initialValue?: T) => { return new Set<T>(); };
// type argument inference
const stringSet1 = createSet1('123');
const numberSet1 = createSet1(456);
const unknownSet1 = createSet1();
