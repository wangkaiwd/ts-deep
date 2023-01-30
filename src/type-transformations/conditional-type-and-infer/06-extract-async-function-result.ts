type InferPropsFromServerSideFunction<T> = T extends () => Promise<{ props: infer P }> ? P : never
type PropsFromServerSideFunction = InferPropsFromServerSideFunction<typeof getServerSideProps>
const getServerSideProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};
