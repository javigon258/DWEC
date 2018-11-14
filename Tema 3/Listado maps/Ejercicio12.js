{

  function informacion(){
    let apar1 = document.getElementById('apar1');
    apar1.innerHTML = " Verdadero.";
    let apar2 = document.getElementById('apar2');
    apar2.innerHTML = " Verdadero.";
    let apar3 = document.getElementById('apar3');
    apar3.innerHTML = " Falsop.";

  }

  function init() {
    informacion();
  }

  document.addEventListener("DOMContentLoaded", init);
}
