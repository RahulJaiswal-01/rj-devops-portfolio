import { useEffect, useState } from "react"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-links a")

    const handleScroll = () => {

      // navbar scroll effect
      setScrolled(window.scrollY > 50)

      let current = ""

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id")
        }
      })

      navLinks.forEach(link => {
        link.classList.remove("active")

        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="logo">Rahul J.</div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  )
}

export default Navbar