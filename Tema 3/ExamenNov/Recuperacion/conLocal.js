{
    let texto;
    let primNomb;
    let botReset;
    let mostrarNomb;
    function opBase(){
        texto = document.getElementById("texto");
        primNomb = document.getElementById("mandaNomb");
        botReset = document.getElementById("botonReset");
        document.getElementById("refAtras").addEventListener("click", atras);
        
        input.addEventListener("blur", validateNombreApellidos);

    }
    
    function generaMensaje(contador) {
        opBase();
        if(contador !== null){
            if(contador === "1"){
                texto.innerHTML = 'Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas';
            }else if(contador === "2"){
                texto.innerHTML = 'Hola de nuevo. Ya estas aquí por segunda vez. ¿Volveremos a vernos?. ';
            }else {
                texto.innerHTML = 'Ya empiezas a ser pesado. Esta es la vez número <b>'
                    + parseInt(contador)+ '</b> que entras. Sigue con tus cosas.';
            }
        }
    }

    function atras(event) {
        event.preventDefault();
        history.back();
    }
    
    function muestraNombre(){
        if(localStorage.getItem('daNombre') == null){
            localStorage.setItem('daNombre', 0);
        }    
    }

    function localStor() {
        if(localStorage.getItem('contador') == null){
            localStorage.setItem('contador', 0);
            generaMensaje(localStorage.getItem('contador'));
        }else{
            localStorage.setItem('contador', parseInt(localStorage.getItem('contador')) + 1);
            generaMensaje(localStorage.getItem("contador"));
        }
    }

    function resetContador(){
        localStorage.setItem('contador', 0);
        texto.innerHTML = '<b>Reseteado</b>';
    }

    function init(){
        localStor();
        botReset.addEventListener("click", resetContador);
    }

    window.addEventListener("load", init);
}