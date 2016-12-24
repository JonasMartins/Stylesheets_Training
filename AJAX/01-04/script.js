	/* adaptando a diferente browsers com relção ao objeto xhr */
	var request;
	if(window.XMLHttpRequest){/*se a api do browser tem o xmlhttp request object...*/
		request = new XMLHttpRequest(); /*instancio a minha variável a esse objeto */
	}else{/* se não vamos checar o active record object*/
		request = new ActiveXObject("Microsoft.XMLHTTP");/* serve para vários browsers */
	}
	request.open('GET', 'data.txt');
	request.onreadystatechange = function(){
			if ( (request.status===200) && (request.readyState===4) ) {
				console.log(request);
				document.writeln(request.responseText);
	}		
	}
	request.send();
	
	