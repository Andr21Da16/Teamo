function startRoutine() {
    document.getElementById("startButton").style.display = "none";
    const messages = [
        document.getElementById("message1"),
        document.getElementById("message2"),
        document.getElementById("message3"),
        document.getElementById("message4"),
        document.getElementById("message5")
    ];
    const carousel = document.getElementById("carousel");
    const finalMessage = document.getElementById("message5");

    let delay = 0;

    messages.forEach((message, index) => {
        setTimeout(() => {
            message.classList.add("show");
            message.style.opacity = "1";

            setTimeout(() => {
                message.style.opacity = "0";
                setTimeout(() => {
                    message.classList.remove("show");
                }, 500); // Desaparece después de 500ms
            }, 1000); // Mantiene visible 1 segundo

        }, delay += 2000); // Intervalo de 2 segundos entre cada mensaje
    });

    setTimeout(() => {
        carousel.style.display = "flex";
        startCarousel();
    }, delay += 1500);

    setTimeout(() => {
        finalMessage.style.opacity = "1";
    }, delay += 5000);
}

function startCarousel() {
    const imagesContainer = document.querySelector('.carousel-images');
    for (let i = 1; i <= 20; i++) {
        const img = document.createElement("img");
        img.src = i + ".jpg"; // Asegúrate de que las imágenes están nombradas del 1 al 20
        img.alt = "Foto " + i;
        imagesContainer.appendChild(img);
    }

    let currentIndex = 0;
    const totalImages = 20;
    setInterval(() => {
        imagesContainer.style.transform = `translateX(-${currentIndex * 160}px)`;
        currentIndex = (currentIndex + 1) % totalImages;
    }, 1500); // Cambia la imagen cada 1.5 segundos
}
