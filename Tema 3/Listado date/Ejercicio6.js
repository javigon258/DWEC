{
  function diaDeLaSemana(argument) {
    let dia = Array("Lunes","Martes","Miércoles",
    "Jueves","Viernes","Sábado","Domingo"
    );
    if (arguments.length != 0) {
      document.getElementById("resp1").innerHTML = dia[argument];
    } else {
      let diaActual = new Date();
      document.getElementById("resp1").innerHTML = dia[diaActual.getDay()];
    }
  }

  function valores() {
    //document.getElementById("resp1").innerHTML = diaDeLaSemana(1);
   }

  function init() {
    diaDeLaSemana(8);
  }

  document.addEventListener("DOMContentLoaded", init);
}
