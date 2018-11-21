{
    let respuesta;
    let numTelefono;

    function validaCampos() {
        respuesta = document.getElementById("final");
        numTelefono = document.getElementById("tipoTel");
        document.getElementById("refAtras").addEventListener("click", atras);      

        let expre = /^9[0-9]{8}$/;
         
        ///^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/
        if (!expre.test(numTelefono)) {
            respuesta.innerHTML = "El número telefónico es correcto.";
            return (true);
        }
        else {
            respuesta.innerHTML = "El número de teléfono ingresado no es válido.";
            return false;
        }
    }

    function atras(event) {
        event.preventDefault();
        history.back();
    } 
     
    function init(){
        document.getElementById("validar").addEventListener("click", validaCampos);
    }

    document.addEventListener("DOMContentLoaded", init);
}