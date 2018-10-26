{

  let botonResultado,
    boton0,
    boton1,
    boton2,
    boton3,
    boton4,
    boton5,
    boton6,
    boton7,
    boton8,
    boton9;

  let botonMenos, botonMas, botonPor, botonDivision, botonIGual;

  let botonBorrar, botonComa, botonPorcentaje, botonCE, botonCambiaSigno;

 /*  function creaCalcu() {
    botonResultado = document.createElement("input");
    botonResultado.type = "text";
    botonResultado.id = "numeros";
    botonResultado.style =
      "margin-left:auto; margin-right: auto; width: 120px; height: 30px;";
    document.body.appendChild(botonResultado);
            
        botonCambiaSigno = document.createElement("button");
        botonCambiaSigno.type = "button";
        botonCambiaSigno.id = 'cambiaValor';
        botonCambiaSigno.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        botonCambiaSigno.innerText = '+/-';

        botonComa = document.createElement("button");
        botonComa.type = "button";
        botonComa.id = 'coma';
        botonComa.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        botonComa.innerText = ',';

        botonIGual = document.createElement("button");
        botonIGual.type = "button";
        botonIGual.id = 'igual';
        botonIGual.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        botonIGual.innerText = '=';
       
        boton1 = document.createElement("button");
        boton1.type = "button";
        boton1.id = '';
        boton1.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton1.innerText = '1';

        boton2 = document.createElement("button");
        boton2.type = "button";
        boton2.id = '2';
        boton2.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;;';
        boton2.innerText = '2';

        boton3 = document.createElement("button");
        boton3.type = "button";
        boton3.id = '3';
        boton3.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton3.innerText = '3';

        boton4 = document.createElement("button");
        boton4.type = "button";
        boton4.id = '4';
        boton4.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton4.innerText = '4';
        
        boton5 = document.createElement("button");
        boton5.type = "button";
        boton5.id = '5';
        boton5.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton5.innerText = '5';

        boton6 = document.createElement("button");
        boton6.type = "button";
        boton6.id = '6';
        boton6.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton6.innerText = '6';

        boton7 = document.createElement("button");
        boton7.type = "button";
        boton7.id = '7';
        boton7.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton7.innerText = '7';

        boton8 = document.createElement("button");
        boton8.type = "button";
        boton8.id = '8';
        boton8.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton8.innerText = '8';

        boton9 = document.createElement("button");
        boton9.type = "button";
        boton9.id = '9';
        boton9.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton9.innerText = '9';

 }

 function addElement() {

    boton0 = document.createElement("button");
    boton0.type = "button";
    boton0.id = '0';
    boton0.style = 'margin-left: 590px; margin-top: 215px; width:35px; height:25px';
    boton0.innerText = '0';

    botonCambiaSigno = document.createElement("button");
    botonCambiaSigno.type = "button";
    botonCambiaSigno.id = 'cambiaValor';
    botonCambiaSigno.style = 'margin-left: 10px; margin-top: 215px; width:35px; height:25px';
    botonCambiaSigno.innerText = '+/-';

    botonComa = document.createElement("button");
    botonComa.type = "button";
    botonComa.id = 'coma';
    botonComa.style = 'margin-left: 10px; margin-top: 215px; width:35px; height:25px';
    botonComa.innerText = ',';

    botonIGual = document.createElement("button");
    botonIGual.type = "button";
    botonIGual.id = 'igual';
    botonIGual.style = 'margin-left: 10px; margin-top: 215px; width:35px; height:25px';
    botonIGual.innerText = '=';

    let currentDiv = document.getElementById("nuevaCalcu");
    document.body.insertBefore(boton0, currentDiv);
    document.body.insertBefore(botonCambiaSigno, currentDiv);
    document.body.insertBefore(botonComa, currentDiv);
    document.body.insertBefore(botonIGual, currentDiv);
  }*/

  function fila2(){
    boton1 = document.createElement("button");
    boton1.type = "button";
    boton1.id = '1';
    boton1.style = 'margin-left: 350px; margin-top: 200px; width:35px; height:25px';
    boton1.innerText = '1';

    let currentDiv = document.getElementById("fila1");
    //document.body.insertBefore(boton1, currentDiv);
    document.insertBefore(boton1, currentDiv);
  }

  function init() {
    let button = document.getElementById("button");
    // button.addEventListener('click', creaCalcu);
   // button.addEventListener("click", addElement);
    button.addEventListener("click", fila2);
  }

  document.addEventListener("DOMContentLoaded", init);

}
