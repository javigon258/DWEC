{
function prueba1() {
  let str = "The best things in life are free";
  let patt = new RegExp("e");
  let res = patt.test(str);
  document.getElementById("prue1").innerHTML = res;
}

function prueba2() {
  let str = "Th bst things in lif ar fr";
  let patt = new RegExp("e");
  let res = patt.test(str);
  document.getElementById("prue2").innerHTML = res;
}

  function init() {
    prueba1();
    prueba2();
  }

  document.addEventListener('DOMContentLoaded', init);
}