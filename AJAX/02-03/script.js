	var request;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest(); 
	}else{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'data.xml');
	request.onreadystatechange = function(){
		if ( (request.status===200) && (request.readyState===4) ) {
			
			var items = request.responseXML.getElementsByTagName('name');

			var output = "<ul>";

			for (var i = 0; i < items.length 0; i++) {
				output += '<li>' + items[i].firstChild.nodeValue + '</li>';

				/* nodeValue é para tirar as aspas duplas da string */
			}
			output += "</ul>";
			document.getElementsById('update').innerHTML = output;
			/* colocando todo o conteudo de output dentro do primeiro elemento com id
			update em index, notar que items é um array com todos os elementos tipo name
			que vieram do xml e podem ser acessados através de seus indices, firstchild pega o primeiro elemento */

		}			
	}
	request.send();
