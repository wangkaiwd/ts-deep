const testingFrameworks = {
  vitest: {
    label: 'Vitest',
  },
  jest: {
    label: 'Jest',
  },
  mocha: {
    label: 'Mocha',
  },
};

type TestingFramework = keyof typeof testingFrameworks;

// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
type Mapish = { [k: string]: boolean }
// M is string|number, because object key will coerce to string
type M = keyof Mapish
