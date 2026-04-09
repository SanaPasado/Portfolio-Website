import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const Particlesbg = () => {
  const [init, setInit] = useState(false);

  // This MUST be here for the engine to load
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "#080808", // This sets the dark background
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1, // Ensures it sits behind your Dashboard content
    },
    particles: {
      number: { value: 160, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: { enable: true, speed: 1, sync: false }
      },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" },
        onClick: { enable: true, mode: "repulse" },
      },
      modes: {
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0 },
        repulse: { distance: 400, duration: 0.4 },
      }
    },
    retina_detect: true
  };

  // If init is false, nothing renders. 
  // If it's true, the background and particles appear.
  if (init) {
    return <Particles id="tsparticles" options={particlesOptions} />;
  }

  return null;
};

export default Particlesbg;