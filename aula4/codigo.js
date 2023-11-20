
function log(texto) {

    document.getElementById('iada').innerHTML += texto;

}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}



log('<br/><br/>');


var urlImagens = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/81c2c457691753.5a059d944bf23.jpg',
    'https://br.web.img2.acsta.net/pictures/22/08/23/09/37/1541299.jpg',
    'https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/11620/filme_11620.jpg',
    'https://www.claquete.com.br/fotos/filmes/poster/8428_medio.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcKuJpS92SmkcI_uJeM4u5F_xD4r0gd9pbr3aRNbKL9Pyd5Qc4AFhaRMIkK8qjcBDebw&usqp=CAU'
];

a = document.getElementById('iada');

var p = document.createElement("p");
p.innerHTML = 'Olá!';
insertAfter(a, p);

console.log(urlImagens.length)

for (var i = 0; i < urlImagens.length; i++) {
    console.log(i)
    var imgTag = document.createElement("img");
    imgTag.setAttribute('src', urlImagens[i]);
    insertAfter(p, imgTag);
}