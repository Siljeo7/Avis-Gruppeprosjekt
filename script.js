const articles = document.querySelectorAll('article');

function show(event) {
  event.target.closest('p').style.color = 'lightblue';
}

articles.forEach(article => { 
  article.addEventListener('click', show)
})
