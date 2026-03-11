import rh from "../assets/logos/rh-logo.png"
import ibm from "../assets/logos/ibm-logo.png"
import gcp from "../assets/logos/gcp-logo.png"

function Certifications() {
  return (
    <section id="certifications" className="certifications" data-aos="zoom-in">

      <h2>Certifications</h2>

      <div className="cert-grid">

        <div className="cert-card card">
          <img src={rh} alt="Red Hat"/>
          <h3>Red Hat Certification</h3>
          <p>Linux System Administration (RHCSA)</p>
        </div>

        <div className="cert-card card">
          <img src={ibm} alt="IBM"/>
          <h3>IBM SkillsBuild</h3>
          <p>Cloud & DevOps related certifications</p>
        </div>

        <div className="cert-card card">
          <img src={gcp} alt="Google Cloud"/>
          <h3>Google Cloud</h3>
          <p>Multiple Skill Badges & Hands-on Labs</p>
        </div>

        <div className="cert-card card">
          <img src={gcp} alt="Google Cloud"/>
          <h3>Additional Achievements</h3>
          <p>40+ skill badges across Google Cloud and other technical courses</p>
          <a href="https://www.linkedin.com/in/rahul-jaiswal001" target="_blank" style={{ color: '#red' }}>
  Click to view all Certifications
</a>
        </div>

          
      
      </div>

    </section>
  )
  
}

export default Certifications