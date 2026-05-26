import "./Projects.css";

function Projects() {
    return (
    <section className="projects" id="projects">
        <h2>My Projects</h2>

        <div className="project-container">
        
        
        <div className="project-card">
            <h3>AES-256 Cryptography Simulation</h3>
            <p><b>Tech:</b> Verilog, Python, Vivado</p>
            <p>Simulated AES-256 encryption and decryption using Verilog modules and Used Python for input handling and Vivado for simulation and verification.</p>
            <div className="project-buttons">
            <button>Live Demo</button>
            <button className="btn-outline">GitHub</button>
            </div>
        </div>

        <div className="project-card">
            <h3>Student Management System</h3>
            <p><b>Tech:</b> Java, MySQL, JDBC</p>  
            <p>Console-based application to manage student records with CRUD operations and database integration using JDBC.</p>
            <div className="project-buttons">
            <button>Live Demo</button>
            <button className="btn-outline">GitHub</button>
            </div>
        </div>

        <div className="project-card">
            <h3>Portfolio Website</h3>
            <p><b>Tech:</b> React, CSS, HTML, JavaScript</p>  
            <p>Responsive portfolio built using React with animations.</p>
            <div className="project-buttons">
            <button>Live Demo</button>
            <button className="btn-outline">GitHub</button>
            </div>
        </div>

        </div>
    </section>
    );
}

export default Projects;