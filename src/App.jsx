import React from "react";
import Header from "./components/Header/header";
import Nav from "./components/Nav/Nav";
import About from "./components/about/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
