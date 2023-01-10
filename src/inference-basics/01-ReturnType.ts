// fixme: why return any but never ?
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any

const x = () => {
  return 1;
};

type R = MyReturnType<typeof x>
