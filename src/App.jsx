import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import LandingPage from "./pages/landing-page/LandingPage";
import ExplorePage from "./pages/explore/ExplorePage";
import Favorites from "./components/favorites/Favorites";
import Auth from "./pages/login/Login";
import Bulletin from "./pages/bulletin/Bulletin";
import Footer from "./components/footer/Footer";
import "./App.scss";

export default function App() {
  const [hikes, setHikes] = useState([]);

  const API_URL = `https://developer.nps.gov/api/v1/thingstodo?q=hiking&limit=30&api_key=${
    import.meta.env.VITE_PARKS_API_KEY
  }`;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setHikes(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="explore" element={<ExplorePage hikes={hikes} />} />
            <Route path="bulletin" element={<Bulletin />} />
            <Route path="favorites" element={<Favorites hikes={hikes} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
