import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import UserDetails from "./Pages/UserDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
