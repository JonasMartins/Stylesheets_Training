/* testando primeiramente se o servidor usa o tipo de
requisição http, ou um microsofct active request e põe a
informação dentro de uma variável request 	*/
var request;
if (window.XMLHttpRequest) {
	request=new XMLHttpRequest();
} else {
	request=new ActiveXObject("Microsoft.XMLHTTP");
}
/* aqui abrimos este request para um arquivo em especifico, no caso 
o noso json, depois criamos um event handler, que vai monitorar o status
do request que iremos fazer, checamos se a requisição vai ser bem sucedida
de acordo com algumas variáveis que o servidor retorna */
request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.status === 200) &&
		(request.readyState === 4)) {

		var info = JSON.parse(request.responseText);

		/* Se tudo passar ok, podemos trabalhar com os dados da mesma
		forma sem o uso do servidor por exemplo */
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
			
			
	} //ready
} //event
/* Esse linha vai mandar a requisição para o servidor e quando a requisição
for bem sucedida, vai chgar na parte :
request.onreadystatechange  e ao passar vai executar todo nessa parte de dentro 
 a função json vai pegar o nosso objeto e quebra-lo com o parse para
 pegar as informações que vamos ultilizar */
request.send();

/* Quando os dados voltam do servidor, voltam como string 
em uma variável especial chamada responseText, que é na verdade
uma string serializada e converte o json obejt em uma string 
normal, e para converter essa string em um objeto javasriing deve ser 
ultilizada a função parse nela, e depois se transforma na variável info
que usamos para fazer os loops e transformar em links 

parse é uma palavra chique para "trdução"

*/