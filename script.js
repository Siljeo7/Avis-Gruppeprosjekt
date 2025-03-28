const articles = document.querySelectorAll('article');

articles.forEach(article => {
    article.addEventListener('mousein', () => {
        article.style.backgroundColor = 'lightblue';
    });
    article.addEventListener('mouseout', () => {
        article.style.backgroundColor = 'white';
    });
});



