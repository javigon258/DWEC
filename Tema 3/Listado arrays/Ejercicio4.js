{
  let numer;
  let mostrar;

  function comprobaciones() { 
    numer = [];
    for (let i = 0; i < 15; i++) {
      numer.push(i);      
    }
  }

  function recorrer(value,index){
    mostrar = document.getElementById("resp1");
    mostrar.innerHTML = mostrar.innerHTML + "Numeros ["+index+"]: " +value +"<br>";
  }

  function nuevo(){
    numer.forEach(recorrer);
  }
  
  function init() {
    nuevo();
  }

  document.addEventListener("DOMContentLoaded", init);
}
