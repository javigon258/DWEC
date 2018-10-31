{
  function compruebaEvery(value) {
    return value < 55;
  }

  function compruebaSome(element) {
    return element % 2 === 0;
  }

  function compruebaFilter(text) {
    text.length > 6;
    
  }

  function valores(){
    let array2 = [1, 30, 9, 29, 60, 25];
    let array3 = [10, 21, 33, 4, 51];
    let words4 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    document.getElementById("resp2").innerHTML = "Nos devuelve "+array2.every(compruebaEvery);
    document.getElementById("array2").innerHTML = array2;

    document.getElementById("resp3").innerHTML = "Nos devuelve "+array3.some(compruebaSome);
    document.getElementById("array3").innerHTML = array3;

    document.getElementById("resp4").innerHTML = "Nos devuelve "+words4.filter(word => word.length > 6);
    document.getElementById("array4").innerHTML = words4;
  }

  function init() {
    valores();
  }

  document.addEventListener("DOMContentLoaded", init);
}
