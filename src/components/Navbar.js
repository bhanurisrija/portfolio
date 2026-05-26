import "./Navbar.css";

function Navbar() {
    return (
    <nav className="navbar">
        <h2 className="logo">Welcome😊</h2>
        <div className="logo">
            <img src="/profile.jpg" alt="Srija" className="profile-img" />
            <h2>Bhanuri Srija</h2>
        </div>

        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    );
}

export default Navbar;