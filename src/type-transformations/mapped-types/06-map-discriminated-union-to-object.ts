type Route =
  | {
  route: '/'
  search: {
    page: string
    perPage: string
  }
}
  | { route: '/about'; search: {} }
  | { route: '/admin'; search: {} }
  | { route: '/admin/users'; search: {} }

type RoutesObject = {
  [R in Route as R['route']]: R['search']
}

type RoutesObject1<T extends { route: string; search: Record<string, any> }> = {
  // [K in T['route']]: T extends { route: K } ? T['search'] : never
  [K in T['route']]: Extract<T, { route: K }>['search']
}

type Y = RoutesObject1<Route>
type Y1 = RoutesObject
