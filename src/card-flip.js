document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("front");
    const text = document.getElementById("back");

    image.addEventListener("click", function () {
        image.style.display = "none";
        text.style.display = 'block';
    });

    text.addEventListener("click", function () {
        image.style.display = "block";
        text.style.display = 'none'
    });
});