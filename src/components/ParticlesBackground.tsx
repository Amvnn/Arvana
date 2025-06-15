import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const prefersReducedMotion = typeof window !== 'undefined' ? 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches : 
  false;

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: prefersReducedMotion ? 60 : 120,
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#38BDF8",
          },
          links: {
            color: "#38BDF8",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: false },
              resize: true
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 }
            }
          },
          move: {
            enable: true,
            direction: "none",
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        retina_detect: true
      }}
    />
  );
};

export default ParticlesBackground;