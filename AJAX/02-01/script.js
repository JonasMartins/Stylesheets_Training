	var request;
	if(window.XMLHttpRequest){/*se a api do browser tem o xmlhttp request object...*/
		request = new XMLHttpRequest(); /*instancio a minha variável a esse objeto */
	}else{/* se não vamos checar o active record object*/
		request = new ActiveXObject("Microsoft.XMLHTTP");/* serve para vários browsers */
	}
	request.open('GET', 'data.txt');
	request.onreadystatechange = function(){
		if ( (request.status===200) && (request.readyState===4) ) {
			var modify = document.getElementById('update')/*pegando todos os elementos com id = update no documento*/
			modify.innerHTML = request.responseText;/*modificando o html dentro do elemento */
			/*
				RELEMBRANDO.........

				request são os dados dentro do arquivo data.txt, após a correta requisição desses
				dados, na pagina index que chama esse script, temos um elemento com o id = update
				que no caso é uma div, criamos uma variável para pegar aquele elemento e depois
				mudamos o seu html para ser o srting que veio dos dados da requisição ajax do documento.txt
				isso vai carregar o texto dentro dos elementos que tiverem o id selecionado pela variável.
			*/
		}		
	}
	request.send();
