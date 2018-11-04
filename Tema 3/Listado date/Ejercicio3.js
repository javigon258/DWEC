{

  function tiempo(){
    let ms = Date.parse ( "2015-05-22T15:48:22.000Z" );
    return ms;
  }
  function valores(){
    document.getElementById("resp").innerHTML = "Tiempo en milisegundos pasada al formato fecha y hora normal: Date.parse ( \"2015-05-22T15:48:22.000Z\" )";
    document.getElementById("resp1").innerHTML = "Fecha y hora en milisegundos: "+tiempo();
  }

  function init() {
    valores();
  }

  document.addEventListener("DOMContentLoaded", init);
}
