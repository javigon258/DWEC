{

  function muestraOculta(id) {
    console.log(target);
    let elemento1 = document.getElementById("contenidos_1");
    let enlace1 = document.getElementById("enlace_1");
    let elemento2 = document.getElementById("contenidos_2");
    let enlace2 = document.getElementById("enlace_2");
    let elemento3 = document.getElementById("contenidos_3");
    let enlace3 = document.getElementById("enlace_3"); 

    if (elemento1.style.display == "") {
      elemento1.style.display = "none";
      enlace1.innerHTML = 'Mostrar contenidos';
    }
    if(elemento2.style.display == ""){
      elemento2.style.display = "none";
      enlace2.innerHTML = 'Mostrar contenidos';
    }
    if(elemento3.style.display == ""){
      elemento3.style.display = "none";
      enlace3.innerHTML = 'Mostrar contenidos';
    }
    else {
      elemento1.style.display = "block";
      enlace1.innerHTML = 'Ocultar contenidos';
      elemento2.style.display = "block";
      enlace2.innerHTML = 'Ocultar contenidos';
      elemento3.style.display = "block";
      enlace3.innerHTML = 'Ocultar contenidos';
    }
  }
  function init() {
    // let enlace1 = document.getElementById("enlace_1");
    // let enlace2 = document.getElementById("enlace_2");
    // let enlace3 = document.getElementById("enlace_3"); 
    document.getElementsByTagName("a",muestraOculta);
    // enlace1.addEventListener("click",muestraOculta);
    // enlace2.addEventListener("click",muestraOculta);
    // enlace3.addEventListener("click",muestraOculta);
  }
  document.addEventListener("DOMContentLoaded", init);

}