{
        String.prototype.truncar = function(longitud) {
        longitud = longitud || 10;
        if(this.length > longitud) {
          return this.substring(0, longitud);
        }
        else {
          return this;
        }
      }
       
      var cadena = "hola mundo";
      alert(cadena.truncar(6));
       
      // Funcion que trunca la longitud de una cadena y añade
      //  un indicador de cadena truncada
      String.prototype.truncar = function(longitud, indicador) {
          if(longitud == 10 || indicador == '...'){
            if(this.length > longitud) {
                return this.substring(0, longitud-indicador.length) + indicador;
              }
              else {
                return this;
              }
          }
      }
       
      var cadena = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.";
      alert(cadena.truncar(50, '... (sigue)'));
      alert(cadena.truncar(50));
}