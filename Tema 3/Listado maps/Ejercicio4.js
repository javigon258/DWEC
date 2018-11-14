{
  let tamanioArray = 15;

  function crearEsqueleto() {
    array = crearArray(tamanioArray);
    descripcion = document.getElementById("contenido");
    pDescripcion = descripcion.appendChild(document.createElement("p"));
    array.forEach(element => {
      pDescripcion.innerHTML += element + ", ";
    });
  }
  function crearArray(tamanio) {
    let array = [],
      i = 0;
    while (array.length < tamanio) {
      array.push(i++);
    }
    return array;
  }

  function init() {
    crearEsqueleto();
  }

  document.addEventListener("DOMContentLoaded", init);
}
