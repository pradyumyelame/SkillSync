import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Hero from "../components/Hero";
import FeatureCart from "../components/FeatureCart";
import Cart from "../components/Card";
import Front from "../components/Front";
import SlickImgSlide from "../components/SlickImgSlide";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import { SlidesData } from "../components/SlidesData";
import User1 from "../pages/User1"; // The correct resume editor

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  // Show a loading message while authentication is in progress
  if (isLoading) {
    return <div style={{padding: "20px"}}>Loading...</div>;
  }

  return (
    <>
      {/* If the user is authenticated, show the User1 resume editor */}
      {isAuthenticated ? (
        <User1 />
      ) : (
      // Otherwise, show the landing page content
        <>
          <Front />
          <Hero />
          <Cart />
          <SlickImgSlide slidess={SlidesData} />
          <FeatureCart />
          <ImageSlider slides={SliderData} />
        </>
      )}
    </>
  );
};

export default Home;
