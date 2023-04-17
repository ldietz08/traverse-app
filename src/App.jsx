import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import LandingPage from "./pages/landing-page/LandingPage";
import ExplorePage from "./pages/explore/ExplorePage";
import Auth from "./pages/login/Login";
import Bulletin from "./pages/bulletin/Bulletin";
import Footer from "./components/footer/Footer";
import "./App.scss";

export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header setIsAuth={setIsAuth} isAuth={isAuth} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="bulletin" element={<Bulletin />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
