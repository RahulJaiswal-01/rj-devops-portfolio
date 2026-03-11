
import { motion } from "framer-motion";
import { FaDocker, FaLinux, FaGitAlt } from "react-icons/fa";
import { SiKubernetes, SiPrometheus } from "react-icons/si";
import avatar from "../assets/avatar.svg";
import Terminal from "./Terminal";

function Hero() {

return (

<section className="hero">

  {/* LEFT TERMINAL */}
 {/* LEFT TERMINAL */}
<div className="hero-terminal">

  <Terminal />

</div>
  {/* AVATAR + ORBIT ICONS */}
  <motion.div
    className="hero-avatar"
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
  >

    <img src={avatar} alt="RJ Avatar" />

    <div className="hero-icons">

      <div className="orbit orbit1">
        <FaDocker size={38}/>
      </div>

      <div className="orbit orbit2">
        <SiKubernetes size={38}/>
      </div>

      <div className="orbit orbit3">
        <FaGitAlt size={38}/>
      </div>

      <div className="orbit orbit4">
        <SiPrometheus size={38}/>
      </div>

      <div className="orbit orbit5">
        <FaLinux size={38}/>
        
      </div>

    </div>

  </motion.div>

</section>

);

}

export default Hero;