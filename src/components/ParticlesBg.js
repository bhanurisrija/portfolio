import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    }, []);

    return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        style={{
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        }}
        options={{
        background: {
            color: "#0f172a",
        },
        particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: {
            enable: true,
            color: "#00f7ff",
            distance: 150,
            opacity: 0.4,
            },
        },
        }}
    />
    );
};

export default ParticlesBackground;