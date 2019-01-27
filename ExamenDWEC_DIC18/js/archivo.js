{

    let nombre, email, fechaLlegada, horaLlegada, numNoches, numPersonas;
    let errNombre, errEmail, errFechaLleg, errHoraLle, errNumNoches, errNumPers, errServicios, errEdadCli;
    let servicios, edadClien;
    let error = false;

    

    function init(){
        nombre = document.getElementById("nombre");
        errNombre = document.getElementById("errNombre");
        nombre.addEventListener("blur", validarInput.bind(null, nombre, errNombre, "nombre"));
        
        email = document.getElementById("email");
        errEmail = document.getElementById("errEmail");
       // email.addEventListener("blur", validarCorreo);
        email.addEventListener("blur", validarInput.bind(null, email, errEmail, "email"));

        fechaLlegada = document.getElementById("fechaLlegada");
        errFechaLleg = document.getElementById("errFechaLleg");

        horaLlegada = document.getElementById("horaLlegada");
        errHoraLle = document.getElementById("errHoraLle");
        //horaLlegada.addEventListener("blur", validarFecha);

        numNoches = document.getElementById("numNoches");
        errNumNoches = document.getElementById("errNumNoches");
        numNoches.addEventListener("blur", numeroNoches);

        numPersonas = document.getElementById("numPers");
        errNumPers = document.getElementById("errNumPers");
        numPersonas.addEventListener("blur", numeroPersonas);

        servicios = document.getElementsByName("servic")
        errServicios = document.getElementById("errServicios");
        servicios.addEventListener("blur", checkDesayuno);
        
        edadClien = document.getElementsByName("edades");
        errEdadCli = document.getElementById("errEdadCli");
        //edadClien.addEventListener("blur", edadRadCliente);

        document.getElementById("enviar").addEventListener("click", validarTodo);

    }

    let patrones = {
        nombre : [/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{2,}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?$/,
        "El nombre para ser valido debe al menos tener 2 caracteres"],
        email : [/^[^áéíóúÁÉÍÓÚ ()@:"\[\]\.ç%&]+@[^áéíóúÁÉÍÓÚ ()<>@:"\[\]\.ç%&]+.[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]{2,4}$/,"Introduce un email con formato válido: email@email.com"],
        fechaLle: [/^(\d{2}[\/ -]){2}\d{4}$/,"Debes introducir una fecha con formato válido: 12/02/2015 - 12 02 2015 - 12-02-2015"], 

    }

    function validarInput(input, errSpan, esValido){
        errSpan.innerHTML = esValido(input.value, );
    /*    ){
            errSpan.innerHTML = "";          
        }else{
            errSpan.innerHTML = mensajeError;
        }*/

    }

    function esValido(valInput, campo){
        if(valInput == ""){
            return patrones.campo[1];
        }
    }

    function validarNombre() {
        if(!patrones.nombre[0].test(nombre.value)){
            error = true;
            errNombre.innerHTML = patrones.nombre[1];
        }else{
            error = false;
            errNombre.innerHTML = "";
        }
    }

    function validarCorreo() {
        if(!patrones.email[0].test(email.value)){
            error = true;
            errEmail.innerHTML = patrones.email[1];
        }else{
            errEmail.innerHTML = "";
            error = false;
        }
    }

    function numeroNoches(){
        if(numNoches.value == "" || numNoches.value == 0){
            error = true;
            errNumNoches.innerHTML = "Minimo debe ser 1 noche";
        }else if(numNoches.value < 1 || numNoches.value > 30){
            error = true;
            errNumNoches.innerHTML = "Valor incorrecto";
        }else{
            error = false;
            errNumNoches.innerHTML = "";
        }
    }

    function numeroPersonas(){
        if(numPersonas.value == "" || numPersonas.value == 0){
            error = true;
            errNumPers.innerHTML = "Minimo debe ser una persona";
        }else if(numPersonas.value <= 1 || numPersonas.value >= 6){
            error = true;
            errNumPers.innerHTML = "Valor incorrecto";
        }else{
            error = false;
            errNumPers.innerHTML = "";
        }
    }

    function checkDesayuno() {
        if(!servicios.checked){
            error = true;
            errServicios.innerHTML = "Debes elegir alguna opcion";
        }else{
            errServicios.innerHTML = "";
            error = false;
        }
    }

    function edadRadCliente(){
        if(edadClien.checked == document.getElementById("menos20").checked){
            error = true;
            errEdadCli.innerHTML = "Debes elegir alguna opcion";
        }else{
            errEdadCli.innerHTML = "";
            error = false;
        }
    }

    function validarFecha(){
        let fechaAct = new Date();
        let fechaCliente = new Date(fechaLlegada);

        if(fechaAct.getFullYear() - fechaCliente.getFullYear() < 0 || fechaAct.getMonth()<fechaCliente.getMonth() || (fechaCliente.getMonth()==fechaAct.getMonth() && fechaCliente.getDate()<fechaAct.getDate())){
            error = true;
            errHoraLle.innerHTML = "Valor de fecha no es correcto";
        }else{
            error = false;
            errHoraLle.innerHTML = "Valor de fecha es correcto";
        }
    }

    function validarTodo(){
        validarNombre();
        validarCorreo();
        numNoches();
        numPersonas();
    }

    window.addEventListener("load", init);
}