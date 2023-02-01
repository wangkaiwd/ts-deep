export const createSet = <T = string> () => {
  return new Set<T>();
};

const otherStringSet = createSet();
