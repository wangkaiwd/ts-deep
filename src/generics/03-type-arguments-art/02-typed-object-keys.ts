const typedObjectKeys = <TObj extends object> (obj: TObj) => {
  return Object.keys(obj) as (keyof TObj)[];
};

const keys = typedObjectKeys({ a: 1, b: 2 });

// only care about key
const typedObjectKeys1 = <TKey extends string> (obj: Record<TKey, any>) => {
  return Object.keys(obj) as Array<TKey>;
};
