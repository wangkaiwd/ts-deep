type Maybe<T extends string | boolean | number> = T | null | undefined

// empty object represent anything that is not null or undefined
type Maybe1<T extends {}> = T | null | undefined

const a: Maybe1<string> = null;
// T & {}
const b: NonNullable<string> = 'x';

