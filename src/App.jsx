import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <div className="container">
        <Title title="What Client says" subTitle="Testimonials" />
        <Testimonials />
      </div>

      <Contact/>
      <Form/>
      <Footer />
    </div>
  );
};

export default App;
