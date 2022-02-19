import axios from "axios";
import { useEffect, useState } from "react";

export const Axios = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>{item.title} </li>
      ))}
    </div>
  );
};
