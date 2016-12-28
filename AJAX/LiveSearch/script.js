/*EVENTOS JQUERY: https://api.jquery.com/category/events/ */
$('#search').keyup(function() { /* apenas aqui ao clicar qq coisa na barra de pesquisa
	a função literal é executada e todo os dados vindos do json são executados, mas sem a 
	qualidade de ser uma pesquisa e sim apenas um trigger */
	
	var searchField = $('#search').val();/* pegando o valor que é digitado dentro 
	do input cujo id = search, as letras que forem digitadas lá serão salvas nessa variável */

	var myExp = new RegExp(searchField, "i");/*este i significa case insentive, sem distinção entre A ou a*/
	
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			/* nome ou bio, interessante apenas o nome, tem muitas palavras, mas segue o exemplo */
			if ( (val.name.search(myExp) != -1 ) || (val.bio.search(myExp) != -1 ) ){ /* se não igual a -1 encontrou aquele texto */
				/* portant mostro todos os dados */

				output += '<li>';
				output += '<h2>'+ val.name +'</h2>';
				output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
				output += '<p>'+ val.bio +'</p>';
				output += '</li>';
			}

		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});	
