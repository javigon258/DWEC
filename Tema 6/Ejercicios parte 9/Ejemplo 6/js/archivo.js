{
	$(function(){	
		$("#enlacemegusta").click(function(e){
			e.preventDefault();
			let objajax = $.get("incrementa-me-gusta.php", {elemento: 32333});
			objajax.error(function(){
				$("#gusto").append('<span class="error">Error al contabilizar el me gusta</span>');
			});
			objajax.success(function(respuesta,textostatus){
				$("#gusto").html("Contigo ya son " + respuesta + " personas a las que les gusta!");
				$("#gusto").addClass("gustado");
				$("#estadosuccess").html(textostatus);
			});
			objajax.complete(function(oa, textostatus){
				$("#estadocomplete").html(textostatus);
			});
		})
	});
}