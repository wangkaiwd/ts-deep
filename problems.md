### Problems

* how to add type correct for reduce

```ts
const arr = ['a', 'b', 'c'];
const result = arr.reduce((accum, item) => {
  return accum[item];
}, object);
```

* remap via `as`

```ts
type Route =
  | {
  route: '/';
  search: {
    page: string;
    perPage: string;
  };
}
  | { route: '/about' }
  | { route: '/admin' }
  | { route: '/admin/users' }

// how to understand when use Route['route']
type RoutesObject1 = {
  [K in Route as Route['route']]: K extends { search: infer S } ? S : never
};
```


