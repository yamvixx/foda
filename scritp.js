document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente ✔");

    // Animación suave cuando se hace scroll
    const cards = document.querySelectorAll(".strategy-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "0.3s";
        });
    });
});
