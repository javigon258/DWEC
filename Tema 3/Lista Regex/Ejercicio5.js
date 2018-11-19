{

function prueba() {
  let str = "Esta es una frase o no es ejemplo!!!";
  let match      = str.match(/[abc]/gi);
  let firstIndex = str.indexOf(match[0]);
  let lastIndex  = str.lastIndexOf(match[match.length-1]);

  document.getElementById("prue1").innerHTML = "Respuesta de la expresion normal ,str.match(/[abc]/gi): " + match 
  +"<br> El primer index de regexp: str.indexOf(match[0]): "+ firstIndex +"<br> La otra expresion para buacar el ultimo index, str.lastIndexOf(match[match.length-1]): "+lastIndex;
  document.getElementById("prue2").innerHTML = "Esta es la frase que prueba: de ejemplo "+ str;
}

  function init() {
    prueba();
  }

  document.addEventListener('DOMContentLoaded', init);
}
