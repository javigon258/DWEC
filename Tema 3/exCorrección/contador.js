{
    /**
     * Asocia manejadores de eventos para dar funcionalidad
     */
    function init(params) {
        let contador = localStorage.getItem("numVisitas");
        contador = (contador === null)? 0: parseInt(contador);
        document.getElementById("idMensaje").innerHTML = generaMensaje(contador); 
        
        localStorage.setItem("numVisitas", ++contador);

        document.getElementById("idResetea").addEventListener("click", resetea);
        document.getElementById("idAtras").addEventListener("click", atras);
    }
    
    /**
     * Vuelve a la página anterior
     * @param {*} event 
     */
    function atras(event) {
        event.preventDefault();
        history.back();
    }
    /**
     * Elimina el número de visitas del almacenamiento local
     */
    function resetea() {
        localStorage.removeItem("numVisitas");
        document.getElementById("idMensaje").innerHTML = `RESETEADO`; 
    }
    /**
     * Devuelve un mensaje en función del argumento. 
     * @param {Número de visitas realizadas a la página} contador 
     */
    function generaMensaje(contador) {

        switch (contador) {
            case 0:
                return `Bienvenido a mi humilde morada.
                Esta es la primera vez que entras. 
                Espero que vuelvas.`
            case 1:
                return `Hola de nuevo.
                Ya estás aquí por segunda vez. ¿Volveremos a vernos?.`
        
            default:
                return `Ya empiezas a ser pesado.
                Esta el la vez número ${contador + 1} que entras. Sigue con tus cosas.`

        }
    }
    document.addEventListener('DOMContentLoaded', init);
}