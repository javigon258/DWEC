{
  let numer;
  function comprobaciones() { 
    numer = [];
    for (let i = 0; i < 15; i++) {
      numer.push(i);      
    }
  }

  function recorrer(value,index){
    document.getElementById("resp1").innerHTML = "Numeros ["+index+"]: " +value;
  }

  function init() {
    numer.forEach(recorrer);
  }

  document.addEventListener("DOMContentLoaded", init);
}
