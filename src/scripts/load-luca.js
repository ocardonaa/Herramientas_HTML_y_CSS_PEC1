function applyConditionalLazyLoading() {
    const isPhone = window.matchMedia("(max-width: 399px)").matches;
    const firstImage = document.getElementById('luca');
    if (isPhone) {
        firstImage.setAttribute("loading", "lazy");
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