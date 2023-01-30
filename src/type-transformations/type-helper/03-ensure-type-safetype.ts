type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;

const a: AddRoutePrefix<string> = '/x';
