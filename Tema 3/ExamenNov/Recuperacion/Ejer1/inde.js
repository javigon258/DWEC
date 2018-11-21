{
    let guardar;
    let mostrar;
    let borrar;

    function guardarDatos(){
        let data = document.getElementById("informacion").value;
        localStorage.setItem("misdatos", data);
        document.getElementById("refAtras").addEventListener("click", atras);

        document.getElementById("informacion").value = null;
    }

    function atras(event) {
        event.preventDefault();
        history.back();
    }
       
    function mostrarDatos(){
        document.getElementById("informacion").value = localStorage.getItem("misdatos");
    }

    function borrarDatos(){
        localStorage.removeItem("misdatos");
    }

    function otro(){
        guardar = document.getElementById("guarda").addEventListener("click", guardarDatos);
        mostrar = document.getElementById("mostrar").addEventListener("click", mostrarDatos);
        borrar = document.getElementById("reset").addEventListener("click", borrarDatos);
    }
    function init(){
        otro();
    }

    window.addEventListener("load", init);
       
}