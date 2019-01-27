{
	$(function(){
		
		$("#coniva").click(function(){
			$.get("recibe-parametros-devuelve-json.php", {pais: "ES", precio: 20}, muestraPrecioFinal, "json");
		})
		$("#siniva").click(function(){
			$.get("recibe-parametros-devuelve-json.php", {pais: "BR", precio: 300}, muestraPrecioFinal, "json");
		})
	});
	
	function muestraPrecioFinal(respuesta){
		$("#base").html("Precio final: " + respuesta.preciofinal);
		if (respuesta.tieneiva=="1"){
			$("#base").css("background-color", "#ffcc00");
		}else{
			$("#base").css("background-color", "#cc00ff");
			$("#base").append($('<span class="clienteext">No se aplica IVA por ser cliente extranjero</span>'));
		}
	}
}