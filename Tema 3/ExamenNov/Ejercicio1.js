{

  let contador = 0;
  
  function generaMensajes() {
    document.getElementById("texto").innerHTML = "Bienvenido a mi humilde morada. Esta es la prmera vez que entras.";
    switch(localStorage.getItem("contador", contador)){
      case contador:
       document.getElementById("texto").innerHTML =
       "Hola de nuevo. ya estas aqui por segunda vez. ¿Volveremos a vernos?";
      case contador:
       document.getElementById("texto").innerHTML =
       "Ya empiezas a ser pesado. Esta es la vez numero"+ localStorage++ +"que entras";
      case contador:
       document.getElementById("texto").innerHTML =
       "Ya empiezas a ser pesado. Esta es la vez numero"+ localStorage++ +"que entras";
    }
    contador++;
    
  /*
    document.getElementById("texto").innerHTML = "Bienvenido a mi humilde morada. Esta es la prmera vez que entras.";
    if(localStorage.getItem("contador", contador) == 2){
        document.getElementById("texto").innerHTML =
        "Hola de nuevo. ya estas aqui por segunda vez. ¿Volveremos a vernos?";
    }else if(localStorage.getItem("contador", contador) == 3){
        document.getElementById("texto").innerHTML =
        "Ya empiezas a ser pesado. Esta es la vez numero "+ localStorage.getItem("contador", contador) +"que entras";
    }
      if(!document.getElementById("boton")){
        document.getElementById("texto").innerHTML = "Reseteado";
      }*/
    /*let atras = document.getElementById('id');
    atras = window.history.go(-1);*/
    //    window.history.back();

  }

  function init() {
    generaMensajes();
  }

  document.addEventListener("DOMContentLoaded", init);
}
