{

  function informacion(){
    let apar1 = document.getElementById('apar1');
    apar1.innerHTML = " Los objetos Set son colecciones de valores";
    let apar2 = document.getElementById('apar2');
    apar2.innerHTML = " Si un objeto iterable es pasado, todos sus elementos serán añadidos al nuevo Set. Si no se especifica este parámetro, o si su valor es null, el nuevo Set estará vacío."
                    + " <br> new Set([iterable]);";
    let apar3 = document.getElementById('apar3');
    apar3.innerHTML = " <br> Set.prototype.add(value)";
    let apar4 = document.getElementById('apar4');
    apar4.innerHTML = " <br> Set.prototype.delete(value)";
    let apar5 = document.getElementById('apar5');
    apar5.innerHTML = " <br> Set.has(value);";
    let apar6 = document.getElementById('apar6');
    apar6.innerHTML = " <br> Set.prototype.size";
    let apar7 = document.getElementById('apar7');
    apar7.innerHTML = " <br> Estos se sobreescriben. DUDA";
    let apar8 = document.getElementById('apar8');
    apar8.innerHTML = " <br> Set.prototype.forEach(callbackFn[, thisArg])";
  }

  function init() {
    informacion();
  }

  document.addEventListener("DOMContentLoaded", init);
}
