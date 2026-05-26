import "./About.css";

function About() {
    return (
    <section className="about" id="about">
        <h2>About Me</h2>

        <div className="about-container">
        <div className="about-text">
            <p>
            I am an aspiring Full Stack Java Developer with strong knowledge in 
            HTML, CSS ,JavaScript, Java,MySQL and React.
            </p>
            <p>
            I am passionate about learning new technologies and improving my 
            problem-solving and coding skills every day.
            </p>
            <p>Currently, I am seeking an opportunity where I can apply my skills
            contribute to meaningful projects 
            and grow as a professional developer.
            </p>
        </div>

        <div className="about-skills">
            <h3>Skills</h3>
            <ul>
            <li>Java</li>
            <li>HTML, CSS, JavaScript</li>
            <li>React</li>
            <li>MySQL</li>
            <li>Cryptography</li>
            </ul>
        </div>
        </div>
    </section>
    );
}

export default About;