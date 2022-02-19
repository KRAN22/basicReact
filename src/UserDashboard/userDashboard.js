import { Profile } from "./profile";
import { Editor } from "./editor";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({});

export const UserDashboard = () => {
  const [user, setUser] = useState({ name: "Kranthi", age: 24 });
  return (
    <div>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Profile />
        <Editor />
      </UserContext.Provider>
    </div>
  );
};
