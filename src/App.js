import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Axios } from "./axios";
import { Calculator } from "./Calculator/Calculator";
import { Fetch } from "./Fetch/fetch";
import { Form } from "./form";
import React from "react";
import { UserDashboard } from "./UserDashboard/userDashboard";

function App() {
  const Links = () => {
    return (
      <div>
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
      </div>
    );
  };
  return (
    <div className="App" style={{ width: "400px", margin: "auto" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Links />} />
          <Route path="/form" element={<Form />} />
          <Route path="/axios" element={<Axios />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
