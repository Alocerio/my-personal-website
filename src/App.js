import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Blog from "./pages/blog/blog";
import video from "../src/assets/videos/video.mov";

import Experiencia from "./components/Experiencia/Experiencia";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <video src={video} className="videoHome " loop autoPlay muted />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-me" element={<Experiencia />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </header>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
