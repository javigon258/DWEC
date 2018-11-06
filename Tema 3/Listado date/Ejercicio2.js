{

  function tiempo(){
    let result="";
    let sd = new Date();
    result += sd.getFullYear()+"/"+(sd.getMonth()+1)+"/"+sd.getDate() + 
              " "+ sd.getHours()+":"+sd.getMinutes()+":"+
              sd.getSeconds();
    return result;
  }
  function valores(){
    document.getElementById("resp").innerHTML = "Fecha y hora actual en milisegundos: "+Date.now();
    document.getElementById("resp1").innerHTML = "Fecha y hora, transformado a formato normal: "+tiempo();
  }

  function init() {
    valores();
  }

  document.addEventListener("DOMContentLoaded", init);
}
