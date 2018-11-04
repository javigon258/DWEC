{
  function calculaEdad(año,mes,dia){
    try {
      let fecha = new Date(año,(mes-1),dia);
      let fechaAct = new Date();
      let añoAct = fechaAct.getFullYear();
      if((añoAct - año) < 0){
        throw "El año es incorrecto";
      }
      if ((añoAct - año) == 0) {
        let mes = fecha.getMonth();
        let mesAct = fechaAct.getMonth();
          if ((mesAct - mes) < 0) {
            throw "El mes es incorrecto";
          }else{
            return ("Tiene: " + (mesAct - mes) + " meses");
          }
      } else {
        return "Su edad: " + (añoAct - año);
        }       
    } catch (error) {
      return "Hay algún error\n" + error;
    }
  }

  function valores() {
    document.getElementById("resp").innerHTML = calculaEdad(2010, 35, 12);
    document.getElementById("resp1").innerHTML = calculaEdad(1998, 5, 22);
  }

  function init() {
    valores();
  }

  document.addEventListener("DOMContentLoaded", init);
}
