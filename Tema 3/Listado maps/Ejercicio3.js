{

  function informacion(){
    let apar1 = document.getElementById('apar1');
    apar1.innerHTML = " Objeto iterable cuyos elementos son pares clave-valor.;";
    let apar2 = document.getElementById('apar2');
    apar2.innerHTML = " Un objeto iterable cuyos elementos son pares clave-valor.";
    let apar3 = document.getElementById('apar3');
    apar3.innerHTML = " <br> var map = new Map([[ 1, 'one' ],[ 2, 'two' ]]); <br> map.get(1);";
    let apar4 = document.getElementById('apar4');
    apar4.innerHTML = " <br> map = new Map([[3, 'three'], [2, 'two']); <br> map.delete(3); --> //  borra [3, 'three'] y devuelve true. "
                    + " <br> Map.prototype.delete(key), Map.prototype.clear()";
    let apar5 = document.getElementById('apar5');
    apar5.innerHTML = " <br> var map = new Map([[ 1, 'one' ],[ 2, 'two' ]]); <br> map.get(1); --> // devuelve 'one' "
                    + " <br> Map.prototype.entries(), Map.prototype.has(key), Map.prototype.values()";
    let apar6 = document.getElementById('apar6');
    apar6.innerHTML = " <br> Map.prototype.size";
    let apar7 = document.getElementById('apar7');
    apar7.innerHTML = " <br> Estos se sobreescriben.";
    let apar8 = document.getElementById('apar8');
    apar8.innerHTML = " <br> Map.prototype.forEach(callbackFn[, thisArg]), o for...of";
  }

  function init() {
    informacion();
  }

  document.addEventListener("DOMContentLoaded", init);
}
