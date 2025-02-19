// portada

function mostrarContenido() {
    let splash = document.getElementById("splash");
    splash.classList.add("hidden");

    setTimeout(() => {
        splash.style.display = "none";
        document.getElementById("contenido").style.display = "block";
    }, 400); // Espera que termine la animación
}

//carussel
let index = 0;
const images = document.querySelector(".carousel-images");
const dots = document.querySelectorAll(".dot");
const totalImages = dots.length;

function updateCarousel() {
    images.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % totalImages;
    updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });
});

setInterval(() => {
    index = (index + 1) % totalImages;
    updateCarousel();
}, 5000);




