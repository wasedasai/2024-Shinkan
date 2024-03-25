//　スムーススクロール
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach((scrollLink) => {
scrollLink.addEventListener("click", (e) => {
    e.preventDefault();
    const hrefLink = scrollLink.getAttribute("href");
    const targetContent = document.getElementById(hrefLink.replace("#", ""));
    const rectTop = targetContent.getBoundingClientRect().top;
    const positionY = window.pageYOffset;
    const viewheight = window.outerHeight;
    const target = rectTop + positionY - 0.1*viewheight;
    window.scrollTo({
    top: target,
    behavior: "smooth",
    });
});
});