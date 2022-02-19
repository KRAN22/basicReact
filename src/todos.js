import { useState, useEffect } from "react";

export const Todos = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      {data &&
        data.map((item) => {
          return <li key={item.id}> {item.title} </li>;
        })}
    </div>
  );
};

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  return data;
};
