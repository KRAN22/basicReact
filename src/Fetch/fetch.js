import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  });
  return (
    <div>
      {data.map((item) => (
        <li key={item.id}> {item.title} </li>
      ))}
    </div>
  );
};
