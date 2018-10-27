{
  let botones = ["CE", "Del", "%", "+", "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+/-", ",", "="];
  let contenido = document.createElement("div");
  contenido.className = "calculadora";
  let elemento;
  let input;
  let contador = 0;

  function cargarCalcu(){
    elemento = document.createElement("div");
    input = document.createElement("input");
    input.type = "text";
    input.className = "texto";
  
    elemento.appendChild(input);
    contenido.appendChild(elemento);
  
    for (let i = 0; i < 5; i++) {
        elemento = document.createElement("div");
        for (let j = 0; j < 4; j++) {
            input = document.createElement("input");
            input.type = "button";
            input.value = botones[contador++];
            input.className = "button";
            elemento.appendChild(input);
        }
        contenido.appendChild(elemento);
    }
    document.body.appendChild(contenido);
  }
  function init(){
    cargarCalcu();
  }

  document.addEventListener("DOMContentLoaded",init);
}