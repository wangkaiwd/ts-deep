// Extract The Awaited Result of a Promise

// unwrap promise
const p = (): Promise<number> => {
  return Promise.resolve(1);
};

type A = Awaited<Promise<number>>

const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@example.com',
  });
};

type ReturnValue = ReturnType<typeof getUser>
type ReturnValue1 = Awaited<ReturnType<typeof getUser>>
