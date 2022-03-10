import React, {useState} from "react";
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

function App() {
  const[user, setUser] = useState("");
  return (
    <div className="App">
      <h1 className=""></h1>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/messenger" element={<Messenger />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
