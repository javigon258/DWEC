/**
 *Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 *Métodos a utilizar:
 *   miVentana = window.open('','','width=200,height=200');
 *   miVentana.document.open();
 *   miVentana.document.write() 
 *   Añade el esqueleto básico: html, head, title, body, ul...
 * 
 */

{
    let creaVentana;
    let creaVentana1;
    let btcerrar;
    let button;

    
    function abrirVentana() {
        for (let i = 1; i < 5; i++) {
            creaVentana = document.open('', 'Ventana' + i , 'width=150','height=100','top=15'+5,'left=10'+5);
            creaVentana.document.write( 
                "<html lang='en'>"
                + "<head>"
                + "  <meta charset='UTF-8'>"
                + "  <meta name='viewport' content='width=device-width, initial-scale=1.0'>"
                + "  <meta http-equiv='X-UA-Compatible' content='ie=edge'>"
                + "  <title>VEntana "+ i +" </title>"
                + "  <script src='multiVentana.js'></script>" 
                + "</head>"
                + "  <body>"
                + "  <p>Ventana "+ i +" </p>"
                //+ "  <button id=cierra>Cerrar</button>"
                + "  <input type=\"button\" id=\"cierra\" value=\"Cerrar\">"
                + "  </body>"
                + "</html>"
            );
        }
        
    }

    function cerrarVentana(){
        creaVentana.document.close();
    }

    function init() {
        button = document.getElementById("button");
        button.addEventListener('click', abrirVentana);
        btcerrar = document.getElementById("cierra");
        btcerrar.addEventListener('click', cerrarVentana);
    }

    document.addEventListener("DOMContentLoaded", init);

}