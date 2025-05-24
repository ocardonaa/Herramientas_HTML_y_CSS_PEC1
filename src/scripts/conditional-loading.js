function applyConditionalLazyLoading() {
    const isPhone = window.matchMedia("(max-width: 799px)").matches;
    const firstImage = document.getElementById('naples1');
    const firstText = document.getElementById("firstText");
    if (isPhone) {
        firstImage.setAttribute("loading", "lazy");
        firstText.setAttribute("fetchpriority", "high");
    }
    else {
        firstImage.setAttribute("fetchpriority", "high");
        firstImage.setAttribute("loading", "eager");
    }
}
applyConditionalLazyLoading();

let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(applyConditionalLazyLoading, 1);
});