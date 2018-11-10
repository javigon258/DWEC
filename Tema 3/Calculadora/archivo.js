{
    let botones = [
        "CE", "Del", "%", "+", 
        "7", "8", "9", "-",
        "4", "5", "6", "x", 
        "1", "2", "3", "/", 
        "0", "+/-", ",", "="];
    let contador = 0;
    let numero;
    let texto;
    let operador = "";
    let comprueba = false;

    function crearCalculadora() {
        let contenido = document.createElement("div");
        let elementos = document.createElement("div");
        let input = document.createElement("input");
        input.disabled = true;
        contenido.className = "calculadora";
        input.type = 'text';
        input.value = 0;
        input.className = 'texto';
        input.style.textAlign = 'right';
        input.style.width = "75%";
        input.style.height = "22px";
        input.style.margin = "11px 10px 11px 10px";
        elementos.appendChild(input);
        contenido.appendChild(elementos);
        
        for (let i = 0; i < 5; i++) {
            elementos = document.createElement("div");
            for (let j = 0; j < 4; j++) {
                input = document.createElement("input");
                input.type = 'button';
                input.value = botones[contador++];
                input.className = 'button';
                elementos.appendChild(input);
            }
            contenido.appendChild(elementos);
        }
        document.body.appendChild(contenido);
        
        
        let listado = document.getElementsByTagName("input");
        texto = document.getElementsByClassName("texto")[0];
        for(let i = 0; i < listado.length; i++){
            listado[i].addEventListener('click', nuevoComp);
        }    
    }

    function nuevoComp(){
        texto = document.getElementsByClassName("texto")[0];
        if(texto.value == "Error" && this.value != "CE")
            return;
        if(!isNaN(parseInt(this.value))){
            if(comprueba){
                texto.value = 0;
            }
            if(texto.value == 0 && !texto.value.includes('.')){
                texto.value = parseFloat(this.value);
            }else{
                texto.value += parseFloat(this.value);
            }
            comprueba = false;
                
        }else{
            if(operador != "" && this.value != "CE" && this.value != "+-" && this.value != "," && this.value != "Del" && this.value != "%"){
                operacion();
            }        
            comprobarOperador(this.value);
                
            if(this.value != "+-" && this.value != "," && this.value != "CE" && this.value != "Del"){
                comprueba = true;
            }
        }
    }

    function comprobarOperador(value){
        if(value == "+" || value == "-" || value == "x" || value == "/"){
            numero = parseFloat(texto.value);
        }
        switch(value){
            case "+":
            texto.value = parseFloat(texto.value) + numero;
            break;
        case "-":
            texto.value = numero - parseFloat(texto.value);
            break;
        case "x":
            texto.value = parseFloat(texto.value) * numero;
            break;
        case "/":
            texto.value = numero / parseFloat(texto.value);
            break;
        case "+/-":
            texto.value = parseFloat(texto.value) * -1;
            break;
        case ",":
            if(!comprueba){
                if(!texto.value.includes('.'))
                    texto.value += '.';
            }
            break;
        case "Del": 
            if(texto.value.length === 1)
                texto.value = 0;
            else
                texto.value = texto.value.slice(0, texto.value.length - 1);
            break;
        case "CE":
            texto.value = 0;
            break;
        case "%":
            texto.value = parseFloat(texto.value) / 100;
            break;
        case "=":
            operacion();
            break;
        }
    }

    function operacion(){
        if(operador != ""){
            switch(operador){
                case "+":
                    texto.value = parseFloat(texto.value) + numero;
                    break;
                case "-":
                    texto.value = numero - parseFloat(texto.value);
                    break;
                case "x":
                    texto.value = parseFloat(texto.value) * numero;
                    break;
                case "/":
                    texto.value = numero / parseFloat(texto.value);
                    break;
            }
        }
        if(texto.value == "Infinity"){
            texto.value = "Error";
        }
        operador = "";
    }

    function init(){
        crearCalculadora();
    }
    document.addEventListener("DOMContentLoaded", init)
}