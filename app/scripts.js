
//	client/app/index.js
var	campos	=	[
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos); // verificando	o conteúdo do array
var	tbody = document.querySelector('table tbody'); // Cria uma varável com os campos do corpo
document.querySelector('.form').addEventListener('submit', function(event) {
    //"preventsDefault"Cancela o evento se for cancelado, evitando que envie um formulário ou acessa um link
    event.preventDefault();
    var	tr = document.createElement('tr');
    campos.forEach(function(campo) {
        var	td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
});
// Esse segmento do código serve para Calcular e incluir o VOLUME
// nova td que armazenará o volume da negociação
var	tdVolume = document.createElement('td');
// As posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
tdVolume.textContent = campos[1].value * campos[2].value;
//Adicionando a td que faltava à tr
tr.appendChild(tdVolume);

//Adicionando a tr
tbody.appendChild(tr);
//	limpa	o	campo	da	data
campos[0].value	= '';
//	limpa	o	campo	da	quantidade
campos[1].value	= 1;
//	limpa	o	campo	do	valor
campos[2].value	= 0;
//	foca	no	campo	da	data
campos[0].focus();
});
