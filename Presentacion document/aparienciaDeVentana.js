{
    document.addEventListener("DOMContentLoaded", init)

    function comprobacion() {
        if (window.top != window.self)  {
            document.getElementById("demo").innerHTML = "¡Esta ventana no es la ventana superior! ¿Estoy en un marco?";
        } else { 
            document.getElementById("demo").innerHTML = "¡Esta ventana es la ventana superior!";
        } 
    }
/*
    function Persona() {
        var self = this; // Algunas personas prefieren `that` en lugar de `self`. 
                         // Escoja cualquiera pero sea consistente.
        self.edad = 0;
      
        setInterval(function crecer() {
          // La función tipo callback apunta a la variable `self` la cual
          // contiene el objeto esperado.
          self.edad++;
        }, 1000);
      }
      */
    function init() {
        document.getElementById("button").addEventListener('click', comprobacion);
    }
}