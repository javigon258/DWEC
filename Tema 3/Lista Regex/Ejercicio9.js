{

//let result = /^hello/.test(cadena);
//document.getElementById("prue1").innerHTML = result;

function probarEntrada(){
  let cadena = "hello world!";
  let subcadena;
  if (regexp.test(cadena)) {
    subcadena = ' contiene ';
  } else {
    subcadena = ' no contiene ';
  }
  document.getElementById("prue2").innerHTML = cadena + subcadena + regexp.source;
}

  function init() {
    probarEntrada();
  }

  document.addEventListener('DOMContentLoaded', init);
}