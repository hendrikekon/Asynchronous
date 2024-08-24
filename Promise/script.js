const apikey = '6ad41eab56c647d1b769e86a82a0239c';

function fetchnews(cari = ''){
    const url = `https://newsapi.org/v2/top-headlines?q=${cari}&country=id&apiKey=${apikey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.articles){
            tampilNews(data.articles);
            console.log(data.articles);
        }else{
            console.log('Error fetching data');
        }
    })
    .catch(err => console.log("error fetching data", err));
}

function tampilNews(articles){
    const newslist = document.getElementById('newsListContainer')
    newslist.innerHTML = '';


    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item', 'col-md-4', 'mb-4');
        newsItem.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${article.urlToImage || 'noimage.png'}" alt="${article.title}">
            <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-subtitle mb-2 text-muted">${article.author}</p>
                <p class="card-text">${article.publishedAt}</p>
                <p class="card-text">${article.description || 'Tidak Ada Deskripsi'} </p>
                <a href="${article.url}" target="_blank" class="btn btn-primary">Baca Lengkap</a>
            </div>
        </div>
        `;
        newslist.appendChild(newsItem);
    });
}

document.getElementById('getNewsBtn').addEventListener('click', () => {
    const cari = document.getElementById('search').value;
    fetchnews(cari);
}
);

fetchnews();