import { useState, useRef, useEffect } from "react";

function Terminal() {

const [history, setHistory] = useState([]);
const [booting, setBooting] = useState(true);
const [input, setInput] = useState("");

const terminalRef = useRef(null);

/* AUTO SCROLL WHEN NEW COMMAND APPEARS */
useEffect(() => {

const bootLines = [
"Booting Rahul Jaiswal. DevOps Environment...",
"Loading Docker Engine... ✔",
"Connecting to Kubernetes Cluster... ✔",
"Starting Jenkins CI/CD Pipeline... ✔",
"Monitoring Services (Prometheus)... ✔",
"System Ready.",
"Type 'help' to see available commands"
];

let index = 0;

const interval = setInterval(() => {

setHistory(prev => [...prev, bootLines[index]]);
index++;

if(index === bootLines.length){
clearInterval(interval);
setBooting(false);
}

}, 700);

return () => clearInterval(interval);

}, []);

const commands = {


boot: [
"DevOps Environment Status:",
"Docker: Running",
"Kubernetes: Connected",
"Jenkins: Active",
"Prometheus: Monitoring"
],
 
help: [
  "Available commands:",
  "about   - About me",
  "skills  - My technical skills",
  "projects - View my projects",
  "contact - Contact information",
  "clear   - Clear terminal"
],

about: [
  "Rahul Jaiswal. - Software Developer & DevOps Enthusiast",
  "Passionate about automation, cloud, and scalable systems."
],

skills: [
  "React",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Linux",
  "MySQL"
],

projects: [
  "MindMate Mental Health Chatbot",
  "CI/CD Pipeline using Jenkins & Docker",
  "Monitoring Dashboard (Prometheus + Grafana)"
],

contact: [
  "Email: your@email.com",
  "GitHub: github.com/yourusername",
  "LinkedIn: linkedin.com/in/yourprofile"
]
 

};

const handleCommand = (e) => {
e.preventDefault();

 
const command = input.trim().toLowerCase();
if(!command) return;
if (command === "clear") {
  setHistory([]);
  setInput("");
  return;
}

if (commands[command]) {
  setHistory(prev => [
    ...prev,
    `Rahul J.@portfolio:~$ ${command}`,
    ...commands[command]
  ]);
} else {
  setHistory(prev => [
    ...prev,
    `Rahul J.@portfolio:~$ ${command}`,
    "Command not found. Type 'help'."
  ]);
}

setInput("");
 

};
const runResumePipeline = () => {

const pipelineSteps = [
"Triggering Resume Pipeline...",
"✔ Build Stage Complete",
"✔ Test Stage Complete",
"✔ Package Stage Complete",
"✔ Deploy Stage Complete",
"Download Ready ✓"
];

let index = 0;

const interval = setInterval(() => {

setHistory(prev => [...prev, pipelineSteps[index]]);
index++;

if(index === pipelineSteps.length){

clearInterval(interval);

/* start download */
setTimeout(() => {

const link = document.createElement("a");
link.href = "/public/resume.pdf";
link.download = "Rahul J._Resume.pdf";
link.click();

}, 500);

}

}, 700);

};
return ( <div className="terminal">

 
  <div className="terminal-header">

<div className="terminal-controls">
<span className="dot red"></span>
<span className="dot yellow"></span>
<span className="dot green"></span>
</div>

<button
onClick={runResumePipeline}
className="terminal-resume"
>
⬇ resume.pdf
</button>
</div>

  <div className="terminal-body" ref={terminalRef}>

    {history.map((line, index) => (
      <p key={index}>{line}</p>
    ))}

    <form onSubmit={handleCommand}>
      <span className="prompt">Rahul J.@portfolio:~$</span>

    <input
className="terminal-input"
value={input}
onChange={(e) => setInput(e.target.value)}
autoFocus
disabled={booting}
/>
    </form>

  </div>

</div>
 

);
}

export default Terminal;
