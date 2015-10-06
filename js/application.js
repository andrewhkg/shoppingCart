$(document).ready(function(){


	// click on the button => get the value first and save it into var name => add name to element string 
	// => append element string into tbody

	$('#new-item-create').on('click', function(){
		console.log("test");
		var name = $('#new-item-name')[0].value;
		var price = $('#new-item-unit-price')[0].value;
		$('table > tbody').append('<tr><td class="name-tag">'+name+'</td><td class="price-tag">'+price+'</td><td class="qnt-tag"><input class="quantity" value="0"></td><td class="sub-tag">0</td></tr>');

	});

		var quantity = $('.quantity')[0].value;

$('#cancel').on('click', function(){
		console.log("cancel");
		var $quantity1 = $('.quantity');
		//$('.quantity').empty();
		$('quantity1').html('');
		});
	
});

