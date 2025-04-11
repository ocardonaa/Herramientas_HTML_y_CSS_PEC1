const cards = document.querySelectorAll('.container-card');
cards.forEach((card)=>{
    const image = card.querySelector('.front-card');
    const text = card.querySelector('.back-card');
    image.addEventListener("click", function() {
        image.style.display = "none";
        text.style.display = 'block';
    });
    text.addEventListener("click", function() {
        image.style.display = "block";
        text.style.display = 'none';
    });
});

//# sourceMappingURL=carta.b64baa23.js.map
