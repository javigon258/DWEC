{
    document.addEventListener("DOMContentLoaded", init)

    function creaCalcu() {
        let boton = document.createElement("button");
        boton.type = "button";
        boton.style = 'width=30,height=20';
        boton.name = "0";
        document.body.appendChild(boton);
    }

    function init() {
        let button = document.getElementById("button");
        button.addEventListener('click', creaCalcu);
    }
}