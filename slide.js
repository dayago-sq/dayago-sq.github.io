let indice = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function moverSlide(direccion) {
    indice += direccion;

    if (indice < 0) {
        indice = totalSlides - 1; // Si estamos en la primera, ir a la última
    } else if (indice >= totalSlides) {
        indice = 0; // Si estamos en la última, volver a la primera
    }

    actualizarSlider();
}

function actualizarSlider() {
    const desplazamiento = -indice * 100;
    slider.style.transform = `translateX(${desplazamiento}%)`;
}

// Auto-slide cada 3 segundos
setInterval(() => moverSlide(1), 3000);