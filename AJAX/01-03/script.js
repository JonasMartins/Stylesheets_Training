	var request = new XMLHttpRequest();
	request.open('GET', 'data.txt');
	/*forma tradicional e correta de chamar uma requisição usando ajax 
	de forma assíncrona */
	request.onreadystatechange = function(){
			if ( (request.status===200) && (request.readyState===4) ) {
				console.log(request);
				document.writeln(request.responseText);
	}		
	}
	request.send();
	
}