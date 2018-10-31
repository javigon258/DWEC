{
  let arboles = new Array("secoya", "pino", "cedro", "roble", "arce");

  function comprobaciones() {
    document.getElementById("arr").innerHTML = "Este es el array a comprobar --> "+arboles;
    if(0 in arboles){
      document.getElementById("op1").innerHTML = true;
    }else{
      document.getElementById("op1").innerHTML = false;
    }
    if(6 in arboles){
      document.getElementById("op2").innerHTML = true;
    }else{
      document.getElementById("op2").innerHTML = false;
    }
    if("Pi" in Math){
      document.getElementById("op3").innerHTML = true;
    }else{
      document.getElementById("op3").innerHTML = false;
    }
  }
  
  function init() {
    comprobaciones();
  }

  document.addEventListener("DOMContentLoaded", init);
}