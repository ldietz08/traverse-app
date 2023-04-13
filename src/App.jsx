import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/Header";
import "./App.scss";

export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes></Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
