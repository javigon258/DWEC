{
  document.addEventListener("DOMContentLoaded", init);

  function muestraOculta(id) {
    let elemento = document.getElementById('contenidos_' + id);
    let enlace = document.getElementById('enlace_' + id);

    if (elemento('contenidos_' + id).style.display == "") {
      elemento.style.display = "none";
      enlace.innerHTML = 'Mostrar contenidos';
    }
    else {
      elemento('contenidos_' + id).style.display = "block";
      enlace.innerHTML = 'Ocultar contenidos';
    }
  }
  function init() {
    let elemento = document.getElementById("contenidos_");
    let enlace = document.getElementById("enlace_");
    elemento.innerHTML = muestraOculta();
    enlace.innerHTML = muestraOculta();
  }
}