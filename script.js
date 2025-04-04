const articles = document.querySelectorAll('article');







document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".oppsum");
    const button = document.querySelector(".toggle-knapp");

    button.addEventListener("click", function () {
        box.classList.toggle("utvid");

        button.style.transform = box.classList.contains("utvid") ? "rotate(180deg)" : "rotate(0deg)";
    });
});

function darkmode(){
    const body = document.body
    body.classList.toggle("darkB");
    const icon = document.getElementById("darkmodeIcon")
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("whiteC");

    /*
    const leftpart = document.querySelector(".left")
    const rightpart = document.querySelector(".right")
    .leftpart.classList.toggle("darkGB")
    .rightpart.classList.toggle("darkGB")
    */
   
}