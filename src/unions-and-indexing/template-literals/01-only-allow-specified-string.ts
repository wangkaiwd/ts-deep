type Route = `/${string}`

export const goToRoute = (route: Route) => {};

// Should succeed:
// goToRoute("/users")
// goToRoute("/")
// goToRoute("/admin/users")
