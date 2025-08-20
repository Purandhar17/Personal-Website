import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Learning from "./components/Learning";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-950" : "bg-white"
      } min-h-screen transition-colors duration-300`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Learning theme={theme} />
      <Experience theme={theme} />
      <Certificates theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
