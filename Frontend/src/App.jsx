import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./modules/Home";
import About from "./modules/About";
import Context from "./modules/Context";
import User from "./modules/User";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickImgSlide from "./components/SlickImgSlide"; // Import the new component
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import { SlidesData } from "./components/SlidesData";
import Custom from "./components/Custom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Context" element={<Context />} />
        <Route path='/User' element={<User />} />
        <Route path='/Custom' element={<Custom />} />
      </Routes>

      {/* <SlickImgSlide slidess={SlidesData} />
       
     
        <ImageSlider slides={SliderData} /> */}

      <Footer />
    </>
  );
}

export default App;
