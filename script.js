const articles = document.querySelectorAll('article');

articles.forEach(article => {
    article.addEventListener('mousein', () => {
        article.style.backgroundColor = 'lightblue';
    });
    article.addEventListener('mouseout', () => {
        article.style.backgroundColor = 'white';
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".oppsum");
    const button = document.querySelector(".toggle-knapp");

    button.addEventListener("click", function () {
        box.classList.toggle("utvid");

        button.style.transform = box.classList.contains("utvid") ? "rotate(180deg)" : "rotate(0deg)";
    });
});