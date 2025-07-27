import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./modules/Home";
import About from "./modules/About";
import Context from "./modules/Context";
// We will remove the old 'User' import if it exists
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Custom from "./components/Custom";
import User1 from "./pages/User1"; // This is our main resume page

// Import the provider
import { ResumeProvider } from "./context/ResumeContext";

function App() {
  return (
    // The provider must wrap everything
    <ResumeProvider>
      <Header />

      <Routes>
        {/* The homepage route */}
        <Route path="/" element={<Home />} />

        {/* The main route for the resume builder */}
        <Route path="/User1" element={<User1 />} /> 

        {/* Other pages */}
        <Route path="/About" element={<About />} />
        <Route path="/Context" element={<Context />} />
        <Route path="/Custom" element={<Custom />} />

        {/* It is critical to remove any old routes to 'Editor' or 'User' */}
        {/* <Route path="/editor" element={<Editor />} />  <-- DELETE THIS IF IT EXISTS */}

      </Routes>

      <Footer />
    </ResumeProvider>
  );
}

export default App;
