{
    let texto;
    let botReset;

    function opBase(){
        texto = document.getElementById("texto");
        botReset = document.getElementById("botonReset");
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
    function generaMensaje2(contador){
        switch (contador) {
            case 0:
                texto.innerHTML = 'Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas';
                break;
            case 1:
                texto.innerHTML = 'Hola de nuevo. Ya estas aquí por segunda vez. ¿Volveremos a vernos?. ';
                break;
            default:
                texto.innerHTML = `Ya empiezas a ser pesado. Esta es la vez número <b>
                ${parseInt(contador)} </b> que entras. Sigue con tus cosas.`;
                break;
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
    function resetea(){
        localStorage.removeItem('contador');
        botReset.innerHTML = "RESETEADO";
    }

    function resetContador() {
        if (localStorage.getItem('contador') !== null) {
          localStorage.setItem('contador', 0);
          texto.innerHTML = '<b>Reseteado</b>';
        }
    }

    function init(){
        localStor();
        botReset.addEventListener("click", resetContador);
    }

    window.addEventListener("load", init);
}