{
    document.addEventListener("DOMContentLoaded", init);

    let botonResultado,boton0,boton1,boton2,boton3,boton4,boton5,boton6,boton7,boton8,boton9;

    let botonMenos,botonMas,botonPor,botonDivision,botonIGual;

    let botonBorrar,botonComa,botonPorcentaje,botonCE,botonCambiaSigno;

    function creaCalcu() {

        botonResultado = document.createElement("input");
        botonResultado.type = "text";
        botonResultado.id = 'numeros';
        botonResultado.style = 'margin-left:auto; margin-right: auto; width: 120px; height: 30px;';
        document.body.appendChild(botonResultado);

        boton0 = document.createElement("button");
        boton0.type = "button";
        boton0.id = '0';
        boton0.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton0.innerText = '0';
        document.body.appendChild(boton0);
        
        boton1 = document.createElement("button");
        boton1.type = "button";
        boton1.id = '';
        boton1.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton1.innerText = '1';
        document.body.appendChild(boton1);

        boton2 = document.createElement("button");
        boton2.type = "button";
        boton2.id = '2';
        boton2.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;;';
        boton2.innerText = '2';
        document.body.appendChild(boton2);

        boton3 = document.createElement("button");
        boton3.type = "button";
        boton3.id = '3';
        boton3.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton3.innerText = '3';
        document.body.appendChild(boton3);

        boton4 = document.createElement("button");
        boton4.type = "button";
        boton4.id = '4';
        boton4.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton4.innerText = '4';
        document.body.appendChild(boton4);
        
        boton5 = document.createElement("button");
        boton5.type = "button";
        boton5.id = '5';
        boton5.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton5.innerText = '5';
        document.body.appendChild(boton5);

        boton6 = document.createElement("button");
        boton6.type = "button";
        boton6.id = '6';
        boton6.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton6.innerText = '6';
        document.body.appendChild(boton6);

        boton7 = document.createElement("button");
        boton7.type = "button";
        boton7.id = '7';
        boton7.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton7.innerText = '7';
        document.body.appendChild(boton7);

        boton8 = document.createElement("button");
        boton8.type = "button";
        boton8.id = '8';
        boton8.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton8.innerText = '8';
        document.body.appendChild(boton8);

        boton9 = document.createElement("button");
        boton9.type = "button";
        boton9.id = '9';
        boton9.style = 'margin-left:auto; margin-right: auto;width:30px;height:20px;';
        boton9.innerText = '9';
        document.body.appendChild(boton9);
        
        /*let claseDiv = document.getElementsByClassName("nuevaCalcu");
        claseDiv.appendChild(boton9);
        document.getElementsByClassName.appendChild(boton9);*/
    }

    function init() {
        let button = document.getElementById("button");
        button.addEventListener('click', creaCalcu);
    }
}