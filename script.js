const bookApiUrl = 'https://striveschool-api.herokuapp.com/books'
const classRow = document.querySelector('.row')

fetch(bookApiUrl)
.then(response => response.json())
.then(data => {
    console.log(data)
    let htmlListContent = ''
    data.forEach((libro) => {
        htmlListContent += `<div class="col-3">
            <div class="card">
            <img src="${libro.img}" class="card-img-top" alt="copertina libro">
            <div class="card-body">
                <h5 class="card-title">${libro.title}</h5>
                <p class="card-text">${libro.price}</p>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="btn btn-success" target="_blank">Compra ora</a>
                <button href="#" class="btn btn-danger">Scarta</button>
            </div>
            </div>
        </div>`
        classRow.innerHTML = htmlListContent
        const pulsanti = document.querySelectorAll('.btn-danger')
        pulsanti.forEach((pulsante) => {
            pulsante.addEventListener('click', function(){
                this.closest('.col-3').remove()
            })
        })
    });
})
