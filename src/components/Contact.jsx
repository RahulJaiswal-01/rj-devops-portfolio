import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

function Contact(){
  return(
    <section id="contact" className="contact" data-aos="fade-up">

      <h2>Contact</h2>
      <p className="contact-subtitle">
Feel free to reach out for collaboration or opportunities.
</p>

      <div className="contact-container">

        <a href="mailto:rahul.miles5319@gmail.com" className="contact-card">
          <FaEnvelope size={22}/>
          <div>
            <h4>Email</h4>
            <p>rahul.miles5319@gmail.com</p>
          </div>
        </a>

        <a href="https://github.com/RahulJaiswal-01" className="contact-card">
          <FaGithub size={22}/>
          <div>
            <h4>GitHub</h4>
            <p>RahulJaiswal-01</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/rahul-jaiswal001" className="contact-card">
          <FaLinkedin size={22}/>
          <div>
            <h4>LinkedIn</h4>
            <p>rahul-jaiswal001</p>
          </div>
        </a>

      </div>

    </section>
  )
}

export default Contact