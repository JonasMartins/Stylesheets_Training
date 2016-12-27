var mybutton = document.getElementById('loadbutton');
mybutton.onclick = loadAJAX;/* executando a função quando um botão tem esse o id loadbutton */

function loadAJAX(){
	
	var request;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest(); 
	}else{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'data.json');
	request.onreadystatechange = function(){

		/* PARSING JSON */

		if ( (request.status===200) && (request.readyState===4) ) {
			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) {
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;

		}			
	}
	request.send();
}/*Load ajax */

/* outra forma de fazer de uma forma usando a função literalmente: */

/*

var mybutton = document.getElementById('loadbutton');

mybutton.onclick = function(){	
	var request;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest(); 
	}else{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'data.json');
	request.onreadystatechange = function(){

		if ( (request.status===200) && (request.readyState===4) ) {
			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) {
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;

		}			
	}
	request.send();
}

*/