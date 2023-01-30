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

type RoutesObject1 = {
  [K in Route as K['route']]: K extends { search: infer S } ? S : never
};

// type RoutesObject = {
//   [R in Route as R["route"]]: R extends { search: infer S } ? S : never;
// };

// {
//   "/": {
//     page: string;
//     perPage: string;
//   };
//   "/about": never;
//   "/admin": never;
//   "/admin/users": never;
// }
