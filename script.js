const articles = document.querySelectorAll('article');







document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".oppsum");
    const button = document.querySelector(".toggle-knapp");

    button.addEventListener("click", function () {
        box.classList.toggle("utvid");

        button.style.transform = box.classList.contains("utvid") ? "rotate(180deg)" : "rotate(0deg)";
    });
});

const toppbox = document.querySelector(".scroll")

function scrollTopp(){
    console.log("Scroller opp")
    window.scrollTo(0, 0);
}