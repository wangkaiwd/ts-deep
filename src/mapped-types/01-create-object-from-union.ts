type Route = '/' | '/about' | '/admin' | '/admin/users'

type RoutesObject = {
  [K in Route]: K
}
