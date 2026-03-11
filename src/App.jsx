import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
/*import Github from "./components/Github"*/

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import "./styles.css"
function App() {
 useEffect(() => {

  AOS.init({
    duration: 1000,
    once: true
  });

  const elements = document.querySelectorAll(".magnetic");

  elements.forEach((el) => {

    el.addEventListener("mousemove", (e) => {

      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 8;
      const moveY = (y - centerY) / 8;

      el.style.transform = `translate(${moveX}px, ${moveY}px)`;

    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0,0)";
    });

  });

}, []);
  return (
    
    <>
    <div className="cursor-glow"></div>
      <Navbar/>
     
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Certifications/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App




/* <Github/>*/