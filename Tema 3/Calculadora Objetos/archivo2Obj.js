/**
 * @author Javier Gonzalez Guzman
 */
{
    let calculadora = {
        botones : [
            "CE", "Del", "%", "+", 
            "7", "8", "9", "-",
            "4", "5", "6", "x", 
            "1", "2", "3", "/", 
            "0", "+/-", ",", "="],
        numero : 0,
        operador : "",
        contador : 0,
        global : [],
        comprueba: false,
        input : "",

        crearCalculadora (){
            let contenido = document.createElement("div");
            let elemento = document.createElement("div");
            let input = document.createElement("input");
            let contador = 0;
            input.disabled = true;
            contenido.className = "calculadora";
            input.type = 'text';
            input.value = 0;
            input.className = 'texto';

            elemento.appendChild(input);
            contenido.appendChild(elemento);
            
            for (let i = 0; i < 5; i++) {
                elemento = document.createElement("div");
                for (let j = 0; j < 4; j++) {
                    input = document.createElement("input");
                    input.type = 'button';
                    input.value =  calculadora.botones[contador++];
                    input.className = 'button';
                    input.addEventListener('click', calculadora.nuevoComp);
                    elemento.appendChild(input);
                }
                contenido.appendChild(elemento);
            }
            document.body.appendChild(contenido);
            
            calculadora.global = document.getElementsByClassName("texto")[0];
            calculadora.input = document.getElementsByTagName("input");        
        },

        nuevoComp: function(){
            if(calculadora.global.value == "Error" && this.value != "CE")
                return;
            if(!isNaN(parseInt(this.value))){
                if(calculadora.comprueba)
                    calculadora.global.value = 0;
    
                if(calculadora.global.value == 0 && !calculadora.global.value.includes('.'))
                    calculadora.global.value = parseFloat(this.value);
                else
                    calculadora.global.value += parseFloat(this.value);
    
                calculadora.comprueba = false;
                    
            }else{
                if(calculadora.operador != "" && this.value != "CE" && this.value != "+/-" && this.value != "," && this.value != "Del" && this.value != "%")
                    calculadora.operacion();
                        
                calculadora.comprobarOperador(this.value);
                    
                if(this.value != "+/-" && this.value != "," && this.value != "CE" && this.value != "Del")
                    calculadora.comprueba = true;
            }
        },

        comprobarOperador: function(value){
            if(value == "+" || value == "-" || value == "x" || value == "/")
                calculadora.numero = parseFloat(calculadora.global.value);
            switch(value){
                case "+":
                    calculadora.operador = "+";
                    break;
                case "-":
                    calculadora.operador = "-";
                    break;
                case "x":
                    calculadora.operador = "x";
                    break;
                case "/":
                    calculadora.operador = "/";
                    break;
                case "+/-":
                    calculadora.global.value = parseFloat(calculadora.global.value) * -1;
                    break;
                case ",":
                    if(!calculadora.comprueba){
                        if(!calculadora.global.value.includes('.'))
                            calculadora.global.value += '.';
                    }
                    break;
                case "Del": 
                    if(calculadora.global.value.length === 1)
                        calculadora.global.value = 0;
                    else
                        calculadora.global.value = calculadora.global.value.slice(0, calculadora.global.value.length - 1);
                    break;
                case "CE":
                    calculadora.global.value = 0;
                    calculadora.operador = "";
                    break;
                case "%":
                    calculadora.global.value = parseFloat(calculadora.global.value) / 100;
                    break;
                case "=":
                    calculadora.operacion();
                    break;
            }
        },

        operacion: function(){
            if(calculadora.operador != ""){
                switch(calculadora.operador){
                    case "+":
                        calculadora.global.value = parseFloat(calculadora.global.value) + calculadora.numero;
                        break;
                    case "-":
                        calculadora.global.value = calculadora.numero - parseFloat(calculadora.global.value);
                        break;
                    case "x":
                        calculadora.global.value = parseFloat(calculadora.global.value) * calculadora.numero;
                        break;
                    case "/":
                        calculadora.global.value = calculadora.numero / parseFloat(calculadora.global.value);
                        break;
                }
            }
            if(calculadora.global.value == "Infinity")
                calculadora.global.value = "Error";
            calculadora.operador = "";
    
        }
    };

    function init(){
        calculadora.crearCalculadora();
    }

    document.addEventListener("DOMContentLoaded", init);
}