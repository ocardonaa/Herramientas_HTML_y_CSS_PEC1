/*
function applyConditionalLazyLoading() {
const isTablet = window.matchMedia("(max-width: 799px)").matches;
const images = document.querySelectorAll("img.image-place");
images.forEach(img => {
    img.setAttribute("loading", "lazy");
});
if (!isTablet) {
const firstImage = document.getElementById('naples1');
firstImage.setAttribute("loading", "auto");
}
}
applyConditionalLazyLoading();

let resizeTimeout;
window.addEventListener("resize", () => {
clearTimeout(resizeTimeout);
resizeTimeout = setTimeout(applyConditionalLazyLoading, 1);
});
*/
function applyConditionalLazyLoading() {
    const isTablet = window.matchMedia("(max-width: 399px)").matches;
    const firstImage = document.getElementById('naples1');
    const firstText = document.getElementById("firstText");
    if (isTablet) {
        firstImage.setAttribute("loading", "lazy");
        firstText.setAttribute("fetchpriority", "high");
    }
    else {
        firstImage.setAttribute("fetchpriority", "high");
    }
}
applyConditionalLazyLoading();

let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(applyConditionalLazyLoading, 1);
});