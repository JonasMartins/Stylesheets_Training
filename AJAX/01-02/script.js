/* fazendo 100 requisições */
for (var i = 0; i < 100; i++) {
	var request = new XMLHttpRequest();
	request.open('GET', 'data.txt', false);/*false é sobre a sincrinicidade da requisição nesse caso false 
	isso faz o browser esperar pela requisição até que esteja completa apenas  para deixar simples 
	esse false faz o servidor esperar até o final de todas as requisições
	para depois seguir em frente, apenas imprime o texto vindo de data.txt após receber de forma
	cprreta todas as 100 requisições feitas.

	*/
	request.send();
	if (request.status===200) {/*200 siginifica o sucesso da requisição ajax */
		console.log(request);
		document.writeln(request.responseText);
	}	
}