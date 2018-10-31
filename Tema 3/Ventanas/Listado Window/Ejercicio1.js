{
    function recogerValores(){
        document.getElementById('lista').innerHTML = 
            "window.outerHeight " + window.outerHeight+ ",tiene la altura en pixeles de toda la ventana del navegador"+"<br>"
            + "window.innerHeight "+ window.innerHeight +", altura (en píxeles) de la ventana de visualización del navegador que incluye, si está renderizada, la barra de desplazamiento horizontal"+"<br>"
            + "window.screen.availHeight "+ window.screen.availHeight +", evuelve el espacio total vertical disponible en la pantalla" +"<br>"
            + "window.screen.height "+ window.screen.height+" ,devuelve la altura en pixeles de la pantalla" +"<br>"
            + "window.document.clientHeight " + window.document.clientHeight + " ,la opción se encuentra deprecated.";
    }
    function init() {
       recogerValores();
    }

    document.addEventListener("DOMContentLoaded", init)
}