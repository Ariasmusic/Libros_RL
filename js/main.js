/* Animación de entrada con GSAP */
gsap.from(".book-card", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});

/* Configuración VanillaTilt */
VanillaTilt.init(document.querySelectorAll(".book-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.4
});

/* Partículas con tsParticles */
tsParticles.load("tsparticles", {
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
        number: { value: 150 },
        color: { value: "#cccccc" },
        shape: { type: "circle" },
        opacity: { value: 0.2, random: true },
        size: { value: 20, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 1, direction: "none", out_mode: "out" }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 }
        }
    },
    detectRetina: true
});
