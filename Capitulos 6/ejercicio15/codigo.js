let refe_letra,refe_cod_letra,posX,posY;
{
  function tecladoM(tecEve){
    let caracter = tecEve.charCode;
    let c_carac = tecEve.keyCode;
    let letra = String.fromCharCode(caracter);
    refe_letra = letra;
    refe_cod_letra = c_carac;
    //document.getElementById("teclado").innerHTML += '<p>'+refe_letra+'</p>';
    //document.getElementById("teclado").innerHTML += '<h3>'+refe_cod_letra+'</h3>';
    muestraInformacion(['Teclado', 'Carácter ['+refe_letra+']', 'Código ['+refe_cod_letra+']']);
  }

  function ratonM(ratEve){
    posX = ratEve.pageX;
    posY = ratEve.pageY;
    //document.getElementById("raton").innerHTML += '<p>'+posX+'</p>';
    //document.getElementById("raton").innerHTML += '<p>'+posY+'</p>';
    muestraInformacion(['Raton', 'PosicionX ['+posX+']', 'PosicionY ['+posY+']']);
   /*pageX pageY*/
  }
      
  function muestraInformacion(mensajeR,mensajeT) {
    document.getElementById("raton").innerHTML = '<h1>'+mensajeR[0]+'</h1>';
    for(let i=1; i<mensajeR.length; i++) {
      document.getElementById("raton").innerHTML += '<p>'+mensajeR[i]+'</p>';
    }
    document.getElementById("teclado").innerHTML = '<h1>'+mensajeT[0]+'</h1>';
    for(let j=1; j<mensajeT.length; j++) {
      document.getElementById("teclado").innerHTML += '<p>'+mensajeT[j]+'</p>';
    }
  }
      document.onkeypress = tecladoM; 
      document.onmousemove = ratonM;

      //document.onmousemove = informacion;
      // document.onkeypress = informacion;
       
      // document.onclick = informacion;
}