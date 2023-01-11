const frontendToBackendEnumMap = {
  singleModule: 'SINGLE_MODULE',
  multiModule: 'MULTI_MODULE',
  sharedModule: 'SHARED_MODULE',
} as const;

type Backend = typeof frontendToBackendEnumMap[keyof typeof frontendToBackendEnumMap]

// Remember the Obj[keyof Obj] pattern when you need all of the values from within an object
