{
  let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
  let expresion = /^(\d{8})[ -]?([TRWAGMYFPDXBNJZSQVHLCKET])$/i;
    ///^(\d{8})[ -]?([TRWAGMYFPDXBNJZSQVHLCKET])$/i
    // /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i  

  function compruebaDni(){
    let error = document.getElementById("error");

    let valor = this.value,
      glGeneral = expresion.exec(valor);
      
    if (glGeneral === null) {
      if (valor === "")
        error.innerHTML = "Campo Vacio";
      else
        error.innerHTML = "Formato incorrecto";
      error.style.color = "red";
      return;
    }
    //Destructuring
    [, numero, letra] = glGeneral;

    if (letra.toUpperCase() !== letras[parseInt(numero % 23)]){
      error.innerHTML = "Letra incorrecta";
      error.style.color = "red";
    }else {
      error.innerHTML = "DNI correcto";
      error.style.color = "green";
    }
  }

  function init() {
    document.getElementById("compdni").addEventListener("blur", compruebaDni);
  }

  document.addEventListener("DOMContentLoaded", init);
}
