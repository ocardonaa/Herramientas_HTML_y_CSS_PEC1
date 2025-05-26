function applyConditionalLazyLoading() {
    const isPhone = window.matchMedia("(max-width: 399px)").matches;
    const isTablet = window.matchMedia("(min-width: 400px) and (max-width: 799px)")
    const firstImage = document.getElementById('bolonyesa');
    const secondImage = document.getElementById('meatballs');

    if (isPhone) {
        firstImage.setAttribute("fetchpriority", "high");
    }
    if (isTablet) {
        firstImage.setAttribute("fetchpriority", "high");
        secondImage.setAttribute("fetchpriority", "high");
    }
    else {
        firstImage.setAttribute("loading", "lazy");
    }
}
applyConditionalLazyLoading();
window.addEventListener("resize", () => {
    applyConditionalLazyLoading();
});