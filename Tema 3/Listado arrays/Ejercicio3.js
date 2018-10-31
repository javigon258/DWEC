{
  function comprobaciones() {
    document.getElementById("resp1").innerHTML = "Comprueba si Array.isArray([1]) es o no un array";
    document.getElementById("resp2").innerHTML = "Comprueba si Array.isArray(new Array()) es o no un array";
    document.getElementById("resp3").innerHTML = "Comprueba si Array.isArray(new Array('a', 'b', 'c', 'd')) es o no un array";
    document.getElementById("resp4").innerHTML = "Comprueba si Array.isArray(undefined) es o no un array";
    document.getElementById("resp5").innerHTML = "Comprueba si Array.isArray(17) es o no un array";
    document.getElementById("resp6").innerHTML = "Comprueba si Array.isArray(null) es o no un array";
    if(Array.isArray([1])){
      document.getElementById("op1").innerHTML = true;
    }else{
      document.getElementById("op1").innerHTML = false;
    }
    if(Array.isArray(new Array())){
      document.getElementById("op2").innerHTML = true;
    }else{
      document.getElementById("op2").innerHTML = false;
    }
    if(Array.isArray(new Array('a', 'b', 'c', 'd'))){
      document.getElementById("op3").innerHTML = true;
    }else{
      document.getElementById("op3").innerHTML = false;
    }
    if(Array.isArray(undefined)){
      document.getElementById("op4").innerHTML = true;
    }else{
      document.getElementById("op4").innerHTML = false;
    }
    if(Array.isArray(17)){
      document.getElementById("op5").innerHTML = true;
    }else{
      document.getElementById("op5").innerHTML = false;
    }
    if(Array.isArray(null)){
      document.getElementById("op6").innerHTML = true;
    }else{
      document.getElementById("op6").innerHTML = false;
    }

  }
  
  function init() {
    comprobaciones();
  }

  document.addEventListener("DOMContentLoaded", init);
}