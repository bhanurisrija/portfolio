import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
    return (
    <div className="hero" id="home">
        <div className="overlay">
        
        {/* Name */}
        <h1>Hi, I'm Srija 👋</h1>

        {/* Typing Animation */}
        <h2>
            <TypeAnimation
            sequence={[
                "Full Stack Developer",
                2000,
                "Java Developer",
                2000,
                "Frontend Developer",
                2000,
            ]}
            speed={50}
            repeat={Infinity}
            />
        </h2>

        {/* Description */}
        <p>
            I build modern, responsive and user-friendly web applications.
        </p>

        {/* Buttons */}
        <div className="buttons">
          {/* View Resume */}
            <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button>View Resume</button>
            </a>

          {/* Download Resume */}
            <a href="/resume.pdf" download="Srija_Resume.pdf">
            <button className="btn-outline">Download Resume</button>
            </a>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
            <a
            href="https://github.com/bhanurisrija"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaGithub />
            </a>

            <a
            href="https://linkedin.com/in/bhanurisrija"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaLinkedin />
            </a>
        </div>

        </div>
    </div>
    );
}

export default Hero;