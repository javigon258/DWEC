{
function prueba1() {
  let text = "First line\nsecond line";
  let regex = /(\S+) line\n?/y;
  
  let match = regex.exec(text);
  document.getElementById("prue1").innerHTML = match[1];
  document.getElementById("prue2").innerHTML = regex.lastIndex;

  let match2 = regex.exec(text);
  document.getElementById("prue3").innerHTML = match2[1];
  document.getElementById("prue4").innerHTML = regex.lastIndex;

  let match3 = regex.exec(text);
  if(match3 === null)
    document.getElementById("prue5").innerHTML = match3;
}

  function init() {
    prueba1();
  }

  document.addEventListener('DOMContentLoaded', init);
}