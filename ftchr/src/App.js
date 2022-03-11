import React, { useState, useEffect } from "react";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Messenger from "./pages/Messenger.js";

// import  user useCOntext onto this page then wrap all the components with the provider
// in the context api, grab username from token
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Dashboard from "./pages/Dashboard.js";
import Profile from "./pages/Profile.js";
import axios from "axios";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    user_id: 0,
    user_name: "",
  });
  // grab user data from token
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    fetch("http://localhost:3001/api/user/verifieduser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${savedToken}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          console.log(data, "data from the verified route");
          setToken(savedToken);
          setUser({
            user_id: data.id,
            user_name: data.user_name,
          });
        }
      });
  }, []);

  return (
    <div className="App">
      <h1 className=""></h1>
      <BrowserRouter>
        {user.user_name !== "" ? <Header /> : <div></div>}
        <Routes>
          <Route exact path="/messenger" element={<Messenger user={user} />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
