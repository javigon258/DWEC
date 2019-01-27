{
	$(function(){	
		$("#enlaceajax").click(function(e){
			e.preventDefault();
			let url = prompt("Dame la URL a la que quieres que acceda", "contenido-ajax.html");
			let objajax = $.get(url);
			objajax.error(function(o, estado, excepcion){
				alert("Error detectado: " + estado + "\nExcepcion: " + excepcion);
				o.complete(function(){alert("Solicitud completada evento cargado desde el evento de error!")});
			});
			objajax.complete(function(){alert("Solicitud completada")});
		})
	});
}