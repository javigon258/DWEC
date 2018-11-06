{
  function recogeFecha() {
    let fecha = document.getElementById("fecha");
    fecha.value = new Date().toISOString().split("T")[0];
    fecha.max = new Date().toISOString().split("T")[0];
  }

  function comprobarDni() {
    let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    let patron = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    ///^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i
    let error = document.getElementById("error");
    error.style.color = "red";
    if (this.value === "") {
      error.innerHTML = "Introduce un dni";
    } else {
      if (!patron.test(this.value)){
       error.innerHTML = "Formato incorrecto";
      }else {
        if (this.value.match(patron)[2].toUpperCase() !=
          letras[parseInt(this.value.match(patron)[1] % 23)]){
          error.innerHTML = "Letra incorrecta";
        }else {
          error.innerHTML = "El DNI es correcto";
          error.style.color = "green";
        }
      }
    }
  }

  function init() {
    document.getElementById("compdni").addEventListener("blur", comprobarDni);
    recogeFecha();
  }

  document.addEventListener("DOMContentLoaded", init);
}
