{

    function creaVentana(){
        window.open("","Datos", "width=300, height=200");
    }

    function init(){
        document.getElementById("enviar").addEventListener("click", creaVentana);
    }

    window.addEventListener("load", init);
}