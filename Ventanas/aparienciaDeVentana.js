/**
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 * window.open()
 * document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * 
 */

{
    document.addEventListener("DOMContentLoaded", init)

    function abrirVentana() {
        let creaVentana = window.open('', '', 'width=300,height=200,top=0,left=0');
        creaVentana.document.write(
            "<html>"
            + "<head>"
            + "<title>Nombre de ejemplo</title>"
            + "</head>"
            + "<body>"
            + "Se han usado los propiedades: "
            + "<ul>"
            + "<li>heigth = 200</li>"
            + "<li>width = 300</li>"
            + "</ul>"
            + "</body>"
            + "</html>");
    }

    function init() {
        let button = document.getElementById("button");
        button.addEventListener('click', abrirVentana);
    }
}