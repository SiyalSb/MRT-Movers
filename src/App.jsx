import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title"
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title title="What Client says" subTitle="Testimonials"/>
        <Testimonials />
        <Footer/>
      </div>
    </div>
  );
};

export default App;
