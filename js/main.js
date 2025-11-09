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


/* book js */
document.addEventListener("DOMContentLoaded", () => {
    const flipbook = document.getElementById("flipbook");
    const audio = document.getElementById("audio");

    const pageFlip = new St.PageFlip(flipbook, {
        width: 600,
        height: 550,
        size: "fixed",
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false,
    });

    const pages = flipbook.querySelectorAll(".page");

    // Si hay un número impar de páginas internas, agregamos una página en blanco
    if ((pages.length - 1) % 2 !== 0) {
        const blankPage = document.createElement("div");
        blankPage.classList.add("page");
        blankPage.innerHTML = "<div class='page-content'></div>";
        flipbook.insertBefore(blankPage, flipbook.lastElementChild); // antes de contraportada
    }

    pageFlip.loadFromHTML(flipbook.querySelectorAll(".page"));
    // Manejo de clics en el índice
    document.querySelectorAll(".tabla-contenido a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const page = parseInt(link.getAttribute("data-page"), 10);
            pageFlip.flip(page);
            audio.play();
        });
    });

    // Botón de inicio
    document.getElementById("btn_home").addEventListener("click", function () {
        // Cambia a la página del índice (aquí uso la 3)
        pageFlip.flip(3);
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
        pageFlip.flipPrev();
        audio.play();
    });

    document.getElementById("next-btn").addEventListener("click", () => {
        pageFlip.flipNext();
        audio.play();
    });
});
function reproducirAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (!audio) return;
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

document.querySelectorAll(".audio-button").forEach((button) => {
    const audioId = button.getAttribute("data-audio");

    // Detener propagación para múltiples eventos de entrada
    ["click", "pointerdown", "mousedown", "touchstart"].forEach(eventType => {
        button.addEventListener(eventType, (event) => {
            event.stopPropagation();
        });
    });

    // Reproducir audio con clic
    button.addEventListener("click", () => {
        reproducirAudio(audioId);
    });
});

// efecto zoom en imágenes

// Selecciona todas las imágenes con clase "zoomable"
const zoomableImages = document.querySelectorAll('.zoomable');
const zoomOverlay = document.getElementById('zoom-overlay');
const zoomImg = document.getElementById('zoom-img');

// Abrir zoom
zoomableImages.forEach(img => {
    img.addEventListener('click', (e) => {
        // Detener propagación para múltiples eventos de entrada
        ["click", "pointerdown", "mousedown", "touchstart"].forEach(eventType => {
            img.addEventListener(eventType, (event) => {
                event.stopPropagation();
            });
        });
        zoomImg.src = img.src;
        zoomOverlay.style.display = 'flex';
    });
});
// Cerrar zoom al hacer clic en la imagen o fondo
zoomOverlay.addEventListener('click', (e) => {
    // Detener propagación para múltiples eventos de entrada
    ["click", "pointerdown", "mousedown", "touchstart"].forEach(eventType => {
        zoomOverlay.addEventListener(eventType, (event) => {
            event.stopPropagation();
        });
    });
    zoomOverlay.style.display = 'none';
    zoomImg.src = '';
});

//paginación

