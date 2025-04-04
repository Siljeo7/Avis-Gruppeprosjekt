const articles = document.querySelectorAll('article');
const toppbox = document.querySelector(".scroll")
let x = 0
const body = document.body
const icon = document.getElementById("darkmodeIcon")
const navElm = document.querySelector("nav")
const navitems = document.querySelectorAll(".navitem")



document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".oppsum");
    const button = document.querySelector(".toggle-knapp");

    button.addEventListener("click", function () {
        box.classList.toggle("utvid");

        button.style.transform = box.classList.contains("utvid") ? "rotate(180deg)" : "rotate(0deg)";
    });
});




function scrollTopp(){
    console.log("Scroller opp")
    window.scrollTo(0, 0);
  }


function darkmode(){
    
    body.classList.toggle("darkB");
    
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("whiteC");
    
    navElm.classList.toggle("darkGB");

    
    const leftpart = document.querySelector(".left")
    const rightpart = document.querySelector(".right")
    leftpart.classList.toggle("darkGB");
    rightpart.classList.toggle("darkGB");
    const logo = document.querySelector(".logo")
    if (x == 0){
        x = 1
        logo.src="Bilder/LogoHvit.png"
    }
    else{
        x = 0
        logo.src="Bilder/logoRIKTIG.png"
    }
    navitems.forEach(navItemElm => {
        navItemElm.classList.toggle("whiteC");
        

    });
    console.log(document.querySelector(".login"))
    document.getElementById("login").classList.toggle("whiteC")
    document.getElementById("user").classList.toggle("whiteC")
}