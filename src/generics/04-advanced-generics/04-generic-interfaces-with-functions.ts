// interface Cache<T> {
//   get: (key: string) => T | undefined;
//   set: (key: string, value: T) => void;
//
//   clone: <U>(transform: (elem: T) => U) => Cache<U>;
// }
//
// const createCache = <T> (initialCache?: Record<string, T>): Cache<T> => {
//   const cache: Record<string, T> = initialCache || {};
//
//   return {
//     get: (key) => cache[key],
//     set: (key, value) => {
//       cache[key] = value;
//     },
//     clone: (transform) => {
//       const newCache: Record<string, any> = {};
//
//       for (const key in cache) {
//         newCache[key] = transform(cache[key]);
//       }
//       return createCache(newCache);
//     },
//   };
// };
//
// const cache = createCache<number>();
//
// cache.set('a', 1);
// cache.set('b', 2);
//
// const stringCache = cache.clone((elem) => {
//   return String(elem);
// });
//
// const a = stringCache.get('a');

interface Cache<T> {
  get: (key: string) => T | undefined;
  set: (key: string, value: T) => void;
  // You can fix this by only changing the line below!
  clone: <U>(transform: (elem: T) => U) => Cache<U>;
}

const createCache = <T> (initialCache?: Record<string, T>): Cache<T> => {
  const cache: Record<string, T> = initialCache || {};

  return {
    get: (key) => cache[key],
    set: (key, value) => {
      cache[key] = value;
    },
    clone: (transform) => {
      const newCache: Record<string, any> = {};

      for (const key in cache) {
        newCache[key] = transform(cache[key]);
      }
      return createCache(newCache);
    },
  };
};

const cache = createCache<number>();
cache.set('a', 1);
cache.set('b', 2);

const stringCache = cache.clone(elem => {
  return String(elem);
});

const a = stringCache.get('a');
