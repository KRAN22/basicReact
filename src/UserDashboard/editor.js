import { useState } from "react";
import { UserContext } from "./userDashboard";
import { useContext } from "react";

export const Editor = () => {
  const userData = useContext(UserContext);
  const user = userData.user;
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  return (
    <div>
      <h1 style={{ color: "red" }}>EditUser</h1>
      <div>
        Name:
        <input
          type={"text"}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        Age:
        <input
          type={"number"}
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          userData.setUser({ name, age });
        }}
      >
        Submit
      </button>
    </div>
  );
};
