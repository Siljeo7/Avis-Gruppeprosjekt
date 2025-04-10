const articles = document.querySelectorAll('article');
const toppbox = document.querySelector(".scroll")
let x = 0
const body = document.body
const icon = document.getElementById("darkmodeIcon")
const navElm = document.querySelector("nav")
const navitems = document.querySelectorAll(".navitem")
const h1Elms = document.querySelectorAll("h1")
const pElms = document.querySelectorAll("p")
const h2Elms = document.querySelectorAll("h2")
const h6Elms = document.querySelectorAll("h6")
const leftpart = document.querySelector(".left")
const rightpart = document.querySelector(".right")
const oppsum = document.querySelector(".oppsum")
const pil = document.querySelector(".toggle-knapp")
console.log(navElm)
console.log(leftpart)
console.log(rightpart)


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
    leftpart.classList.toggle("darkGB");
    rightpart.classList.toggle("darkGB");
    const logo = document.querySelector(".logo")
    console.log(document.querySelector(".login"))
    document.querySelector(".login").classList.toggle("whiteC")
    document.getElementById("user").classList.toggle("whiteC")
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
    h1Elms.forEach(h1ItemElm => {
        h1ItemElm.classList.toggle("greenGrey");
        

    });
    pElms.forEach(pItemElm => {
        pItemElm.classList.toggle("greenGrey");
        

    });
    h2Elms.forEach(h2ItemElm => {
        h2ItemElm.classList.toggle("greyGreen");
        

    });
    h6Elms.forEach(h6ItemElm => {
        h6ItemElm.classList.toggle("whiteC");
        

    });
}

function darkmode2(){
    console.log(document.querySelector("main"))
    document.querySelector("main").classList.toggle("darkB")
}
    
    
    
    
    
    


/*søkefelt*/
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchIndex");
    const articles = document.querySelectorAll("main article");

    searchInput.addEventListener("input", () => {
        const sok = searchInput.value.toLowerCase();

        articles.forEach(article => {
            const titleElement = article.querySelector("h1");
            const titleText = titleElement ? titleElement.textContent.toLowerCase() : "";

            if (titleText.includes(sok)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });
});

const articleList = [
    { title: "DeepSeek vs ChatGPT", url: "article1.html"},
    { title: "Nytt KI-prosjekt skaper turbulens blant Trump sine næraste", url: "Artikkel3.html" },
    { title: "Tar grep om KI i høyere utdanning: – Viktig, mener jusstudent", url: "artikkel4.html" },
    { title: "Liberal dommarkandidat vann, nederlag for Musk", url: "artikkel5.html" },
    { title: "Kunstig intelligens: hvordan vil det påvirke oss?", url: "artikkel2.html" },
    { title: "DeepSeek, Den kinesiske AI-appen som får verden til å snakke?", url: "sub2article1.html" },
    { title: "Australia advarer mot DeepSeek – men er det trygt å bruke?", url: "sub3article1.html" },
    { title: "USAs teknologi-aksjer stabiliserer mens Nvidia stiger etter DeepSeek-sjokket", url: "subarticle1.html" }
  ];
  
  /* Dropdown-container*/
  const searchInput = document.getElementById('searchInput');
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');
  searchInput.parentNode.appendChild(dropdown);
  
  searchInput.addEventListener('input', () => {
    const input = searchInput.value.toLowerCase();
    dropdown.innerHTML = '';
  
    if (input.length > 0) {
      const filtered = articleList.filter(article => article.title.toLowerCase().includes(input));
      filtered.forEach(article => {
        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = article.title;
        dropdown.appendChild(link);
      });
  
      if (filtered.length === 0) {
        dropdown.innerHTML = '<p>Ingen treff</p>';
      }
    }
  });

  document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.innerHTML = '';
    }
  });
