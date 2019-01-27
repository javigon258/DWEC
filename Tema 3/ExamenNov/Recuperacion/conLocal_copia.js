{
    let texto;
    let botReset;
    let mostrarNomb;

    function opBase(){
        texto = document.getElementById("texto");
        mostrarNomb = document.getElementById("mostrarNomb");
        input = document.getElementById("input");
        botReset = document.getElementById("botonReset");
        document.getElementById("refAtras").addEventListener("click", atras);
        
        input.addEventListener("blur", validateNombreApellidos);
    }

    function atras(event) {
        event.preventDefault();
        history.back();
    }

    function generaMensaje(daNombre) {
        opBase();
        if(daNombre !== null){
            if(daNombre === " "){
                mostrarNomb.innerHTML = 'No hay nombre';
            }else if(daNombre === "2"){
                mostrarNomb.innerHTML = 'Hola de nuevo. Ya estas aquí por segunda vez. ¿Volveremos a vernos?. ';
            }else {
                mostrarNomb.innerHTML = 'Ya empiezas a ser pesado. Esta es la vez número <b>'
                    + parseInt(daNombre)+ '</b> que entras. Sigue con tus cosas.';
            }
        }    
    }

    function resetContador(){
        localStorage.removeItem('daNombre', s);
        mostrarNomb.innerHTML = '<b>Reseteado</b>';
    }

    function init(){
        localStor();
        botReset.addEventListener("click", resetContador);
    }

    window.addEventListener("load", init);
}