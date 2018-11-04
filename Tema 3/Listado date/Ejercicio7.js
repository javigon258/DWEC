{
  function esBisiesto(año,mes,dia,hora,min,segs,milis){
    try {
      if(isNaN(año) || año < 1){
        throw "El año no es correcto";
      }
      if (isNaN(mes) || mes < 0) {
        throw "El mes no es correcto";
      }
      if (isNaN(dia) || dia < 1) {
        throw "El día no es correcto";
      }
      let fecha = new Date(anno, mes , dia, hora, min, segs, milis);
      let fechHoraCorrecta = fecha.getFullYear();
      if ((fechHoraCorrecta % 4 == 0 && fechHoraCorrecta % 100 != 0) || fechHoraCorrecta % 400 == 0) {
        return "Es bisiesto";
      } else {
        return "No es bisiesto";
      }
    } catch (error) {
      return error + ", la fecha no es válida";
    }
  }

  function valores() {
    document.getElementById("resp").innerHTML = esBisiesto(2016,11,10,15,56,24,0);
    document.getElementById("resp1").innerHTML = esBisiesto("2016","hola",12,12,12,12,12);
  }

  function init() {
    valores();
  }

  document.addEventListener("DOMContentLoaded", init);
}
