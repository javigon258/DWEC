{
  function usosSet() {
    //Constructor admite como parámetros:
    let array = ["prueba1", "prueba2", "prueba3"];
    let constructorSet = new Set(array);

    console.log(constructorSet);

    //Métodos para añadir:
    let setAñadir = new Set();

    setAñadir.add("nombre");
    setAñadir.add({ ejemplo: "bienvenido" });
    setAñadir.add({ prueba: "nuemero" });

    console.log("Set add() ---- " + setAñadir);

    //Método que eliminar
    let setDelete = new Set();

    setDelete.add("nombre", "presentacion");
    setDelete.delete("nombre");

    console.log("Set delete() ---- " + setDelete);

    //Número de elementos:
    let setSize = new Set();

    setSize.add("Nombre1");
    setSize.add("Nombre2");
    setSize.add("Nombre3");
    setSize.add("Nombre4");
    setSize.add("Nombre5");

    console.log("Set size() ---- " + setSize.size);

    //Se recorren mediante:
    let recorrerSet = new Set();

    recorrerSet.add("nombre", "hola");

    recorrerSet.forEach(element => {
      console.log("Set forEach() ---- " + element);
    });
  }

  function init() {
    usosSet();
  }

  document.addEventListener("load", init);
}
