

//CRIA O EVENTO SUBMIT E ASSOCIA AO ELEMENTO .FORM
let	controller	=	new	NegociacaoController();

document.querySelector('.form')
		.addEventListener('submit',	controller.adiciona);
