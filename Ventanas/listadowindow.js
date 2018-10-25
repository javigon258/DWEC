{
    /*function mostrarLista(){
        newLista = document.getElementById("lista");
        newLista.document.createElement();
    }*/
    let creaVentana;
    function abrirVentana() {
        creaVentana = document.open('https://www.w3schools.com', 'Ejemplo', 'width=300,height=450,top=0,left=0');
    }

    function deglosarUrl() {
        creaVentana = document.open('https://www.w3schools.com', 'Ejemplo', 'width=300,height=450,top=0,left=550');
        //creaVentana.
    }

    function desplazar(){
        creaVentana.scrollTo(600,100)
    }

    function init() {
        let otro = document.getElementsByTagName("scrol");
        let button = document.getElementById("button");
        button.addEventListener('click', abrirVentana);
        otro.addEventListener('click', desplazar);
    }

    document.addEventListener("DOMContentLoaded", init)
}