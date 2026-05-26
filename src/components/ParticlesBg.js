import Particles from "react-tsparticles";

function ParticlesBg() {
    return (
    <Particles
        style={{
        position: "fixed",
        zIndex: -1
        }}
        options={{
        particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: {
            enable: true,
            color: "#00f7ff"
            }
        }
        }}
    />
    );
}

export default ParticlesBg;