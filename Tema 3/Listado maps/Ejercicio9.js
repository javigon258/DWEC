{

function usosWeakSet() {
    //Constructor admite como parámetros:
    let oPr1 = { nombre: "Javier" };
    let oPr2 = { apellido: "Gonzalez" };
    let oPr3 = { apellido: "Guzman" };
    let wSConstructor = new WeakSet([oPr1, oPr2, oPr3]);

    console.log(wSConstructor);

    //Métodos para añadir
    let wSAñadir = new WeakSet();
    let oPr4 = { nombre: "oPr5" };
    let oPr5 = { nombre: "oPr6" };
    wSAñadir.add(oPr4);
    wSAñadir.add(oPr5);

    console.log("Set add() ---- " + wSAñadir);

    //Métodos para eliminar
    let wSBorrar = new WeakSet();
    let oPr6 = { nombre: "oPr6" };
    wSBorrar.add(oPr6);
    wSBorrar.delete(oPr6);

    console.log("Set delete() ---- " + wSBorrar);

    //Número de elementos
    // No se puede comprobar el tamaño porque son referencias de memoria 

    //Se recorren mediante
    let wSRecorrer = new WeakSet();
    let oPr7 = { nombre: "Objeto7" };
    wSRecorrer.add(oPr7);

  }

  function init(){
    usosWeakSet();
  }

  document.addEventListener("load", init);
}
