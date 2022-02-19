import axios from "axios";
import { useState } from "react/cjs/react.development";

export const Form = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { userName, email, password, confirmPassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password)
      if (userName.length <= 5) {
        alert("userName must be 5 characters");
      } else {
        axios
          .post(
            "https://dataenter-be41b-default-rtdb.firebaseio.com/register.json",
            data
          )
          .then(() => {
            alert("Submitted successfully");
          });
      }
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type={"text"}
            placeholder="userName"
            name="userName"
            value={userName}
            onChange={changeHandler}
          />
          <br />
          <input
            type={"email"}
            placeholder="email"
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <input
            type={"password"}
            placeholder="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <input
            type={"password"}
            placeholder="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={changeHandler}
          />
          <br />
          {password !== confirmPassword ? (
            <p style={{ color: "red" }}>password are not matched</p>
          ) : null}
          <input type={"submit"} name="submit" />
        </form>
      </center>
    </div>
  );
};
