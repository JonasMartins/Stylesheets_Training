
/* O que acontece se usarmos esse data.json em outro loca, por exemplo em outro servidor
e não na pasta atual ? veremos que irá ocasionar um erro, dependendo de certos browsers
podem não ser permitidas esse acesso.

Para isso chamamos uma função no arquivo js que chamamos dataHandler e colocamos todo o escopo
do qrquivo json dentro dela como um argumento dessa função isso é chamado JSONP, é um 
padding nos dados em json 
*/

/* essa variável info vem do arquivo json */
function dataHandler(info){
	
/* Para ter acesso basta copiar na pasta local html do meu apache server e ver o funcionamento */
	var output='';
	for (var i = 0; i <= info.links.length-1; i++) {
		for (key in info.links[i]) {
			if (info.links[i].hasOwnProperty(key)) {
				output += '<li>' + 
				'<a href = "' + info.links[i][key] +
				'">' + key + '</a>';
				'</li>';
	    }   
		}
	}
	
	var update = document.getElementById('links');
	update.innerHTML = output;
	
}