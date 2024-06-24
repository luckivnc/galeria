const imgPorPagina = 5 ;
let paginaAtual = 1;

const imagens = [
     "img/sabath das bruxas.jpg",
     "img/voo das bruxas.webp",
     "img/saturno_c.webp",
     "img/15.11FuzilamentosGoya.webp",
     "img/images.jpg",

     "img/Dorothea-Tanning-Eine-Kleine-Nachtmusik.jpg",
     "img/insomnies.jpg",
     "img/2a8538d9b40a0c48d5fe9fad2649515b.jpg",
     "img/7_L.jpg",
     "img/doroturning.jpg"
];

function showPage(page) {
    const start = (page - 1) * imgPorPagina;
    const end = start + imgPorPagina;
    const imgToShow = imagens.slice(start, end);

    const imgContainer = document.getElementById('img-container');
    imgContainer.innerHTML = '';
    imgToShow.forEach( imageSrc => {      
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgContainer.appendChild(imgElement);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= imagens.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (paginaAtual > 1) {
        paginaAtual--;
        showPage(paginaAtual);  
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (paginaAtual * imgPorPagina < imagens.length) {
        paginaAtual++;
        showPage(paginaAtual);
    }
});

showPage(paginaAtual);