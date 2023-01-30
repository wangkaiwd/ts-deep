type TemplateLiteralKey = `${'user' | 'post' | 'comment' | 'admin'}${'Id' | 'Name'}`;
// Record first argument: a set of properties K
type ObjectOfKeys = Record<TemplateLiteralKey, string>
