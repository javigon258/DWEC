{ 
  function prueba1() {
    let str = "Esta es una frase o no es ejemplo!!!";
    let patt1 = /es/g;
    let result = str.match(patt1);
    document.getElementById("prue1").innerHTML = str + "<br>" + "Esta es la expresion regular que se aplica a esta frase: "+patt1 + "<br>";
    document.getElementById("prue2").innerHTML = "Esto es lo que devuelve de la expresion regular: " +result;
  }

  function prueba2() {
    let str = "AestA es una frAse o no es Ejemplo!!!";
    let patt1 = /^A/;
    let result = str.match(patt1);
    document.getElementById("prue3").innerHTML = str + "<br>" + "Esta es la expresion regular que se aplica a esta frase: "+patt1 + "<br>";
    document.getElementById("prue4").innerHTML = "Esto es lo que devuelve de la expresion regular: " +result;
  }

  function init() {
    //prueba1();
    prueba2();
  }

  document.addEventListener('DOMContentLoaded', init);
}
