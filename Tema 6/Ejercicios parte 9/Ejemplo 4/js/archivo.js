{
	$(function(){	
		$("#solicitud").click(function(e){
			let objajax = $.get("contenido-ajax.html", function(respuesta){
				alert("paso 1");
			});
			objajax.success(function(){
				alert("paso 2");
			});
			objajax.complete(function(){
				alert("paso 3");
			});
		})
	});
}