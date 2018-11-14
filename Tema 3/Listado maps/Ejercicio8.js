{
  function informacion(){
    let apar1 = document.getElementById('apar1');
    apar1.innerHTML = " Permite almacenar y mantener objetos débilmente en una colección.    ";
    let apar2 = document.getElementById('apar2');
    apar2.innerHTML = " Iterable​, si un objeto iterable es pasado, todos sus elementos se agregaran al nuevo WeakSet. null es tratado como undefined";
    let apar3 = document.getElementById('apar3');
    apar3.innerHTML = " <br> add(value)​, ​agrega un nuevo objeto con el valor dado al objeto WeakSet.";
    let apar4 = document.getElementById('apar4');
    apar4.innerHTML = " <br> delete(value)​, ​elimina el elemento asociado al valor.";
    let apar5 = document.getElementById('apar5');
    apar5.innerHTML = " <br> has(value)​, ​devuelve un valor booleano que indica si un elemento está "
                    + " <br> presente con el valor dado en el objeto WeakSet o no.";
  }

  function init() {
    informacion();
  }

  document.addEventListener("DOMContentLoaded", init);
}
