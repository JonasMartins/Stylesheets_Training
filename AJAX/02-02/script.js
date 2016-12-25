	var request;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest(); 
	}else{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'data.txt');
	request.onreadystatechange = function(){
		if ( (request.status===200) && (request.readyState===4) ) {
			
			var modify = document.getElementsByTagName('li');/*acessando os li no documento temos um array com esses
			elementos */
			/*acessando os elementos do array que foram carregados na variável */
			modify[2].innerHTML = request.responseText;/* colocando em forma de texto
			os dados no 3 elemento li na pagina */
		
			/* resumo:
				PEGANDO A O SEGUNDO ELEMENTO DO TIPO UL INDICE=1 E DENTRO DESSE UL
				PROCURO POR UM ELEMENTO DO TIPO LI E PEGO O 3º ELEMENTO DENTRO DESSE OBJETO
				NO CASO O LI E ADICIONO O TEXTO COMO HTML.
			*/
			var modify2 = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
			modify2[2].innerHTML = request.responseText;


			/* LOOP */
			for (var i = 0; i < modify.length; i++) {
				modify[i].innerHTML = request.responseText;
			}

		}			
	}
	request.send();
