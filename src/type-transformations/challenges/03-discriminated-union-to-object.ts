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

type RoutesObject = unknown;

// {
//   "/": {
//     page: string;
//     perPage: string;
//   };
//   "/about": never;
//   "/admin": never;
//   "/admin/users": never;
// }
