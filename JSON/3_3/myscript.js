$(document).ready(function(){
	/* Para ter acesso basta copiar na pasta local html do meu apache server e ver o funcionamento */
	/* Usando o jquery para pegar os dados em JSON */	
	$.getJSON('data.json', function(info){ 
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

	}); //getJson
}); /*ready */