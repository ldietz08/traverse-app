import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import LandingPage from "./pages/landing-page/LandingPage";
import Auth from "./pages/login/Login";
import "./App.scss";

export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
