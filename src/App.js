import React, { useState } from "react";
import "./App.css";
// import "../src/components/Responsive.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  const [darkTheme, setDarkTheme] = useState(getDefaultTheme());

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme));
  }, [darkTheme]);

  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem("dark"));
    return selectedTheme || false;
  }

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Hero />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
