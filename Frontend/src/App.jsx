import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./modules/Home";
import About from "./modules/About";
import Context from "./modules/Context";
import User from "./modules/User";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Custom from "./components/Custom";
import User1 from "./pages/User1";

// 1. Import the provider you created earlier
import { ResumeProvider } from "./context/ResumeContext";

function App() {
  return (
    // 2. Wrap all your components with the ResumeProvider
    // This makes the context available to Header, Routes, and Footer.
    <ResumeProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Context" element={<Context />} />
        <Route path="/User" element={<User />} />
        <Route path="/Custom" element={<Custom />} />
        <Route path="/User1" element={<User1 />} />
      </Routes>

      <Footer />
    </ResumeProvider>
  );
}

export default App;
