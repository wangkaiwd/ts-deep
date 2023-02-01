const fetchData = async <T> (url: string) => {
  const data: T = await fetch(url).then((response) => response.json());
  return data;
};

const fetchData2 = async <T> (url: string): Promise<T> => {
  const data = await fetch(url).then((response) => response.json());
  return data;
};
const fetchData3 = async <T> (url: string) => {
  const data = await fetch(url).then((response) => response.json());
  return data as T;
};

const fetchData4 = async <T> (url: string) => {
  // Awaited<T>
  const data = await fetch(url).then((response): Promise<T> => response.json());
  return data;
};

const data = await fetchData<{ name: string }>('https://swapi.dev/api/people/1');
