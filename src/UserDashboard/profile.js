import { useContext } from "react";
import { UserContext } from "./userDashboard";

export const Profile = () => {
  return (
    <div>
      <User />
    </div>
  );
};

export const User = () => {
  const user = useContext(UserContext).user;
  return (
    <div>
      <h1 style={{ color: "red" }}>Profile</h1>
      <h1>Name : {user.name}</h1>
      <h1>Age : {user.age}</h1>
    </div>
  );
};
