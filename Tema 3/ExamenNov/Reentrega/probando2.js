{
    let nombre;
    let apellidos;
    let input;
    let spanError;
    let setValidate;

    function baseEp(){
        nombre = document.getElementById("nomb");
        apellidos = document.getElementById("apell");
        input = document.getElementById("input");
        document.getElementById("atras").addEventListener("click", atras);
        spanError = document.getElementById("spanError");
        setValidate = new Set();

        input.addEventListener("blur", validateNombreApellidos);
    }

    function ErrorException(msj, name) {
        this.message = msj;
        this.name = name;
    }

    function atras(event) {
        event.preventDefault();
        history.back();
      }
    
    function validarSetCollection(rnombre, apellido1, apellido2) {

        if (arguments.length === 2) {
            if(!setValidate.has(rnombre.trim())){
                setValidate.add(rnombre.trim());
            }else{
                spanError.textContent += " (nombre repetido) ";
            }
            if (!setValidate.has(apellido1.trim())) {
                setValidate.add(apellido1.trim());
            }else{
                spanError.textContent += " (1er apellido repetido) ";
            }
        }else if(arguments.length === 3){
            if(!setValidate.has(rnombre.trim())){
                setValidate.add(rnombre.trim());
            }else{
                spanError.textContent += " (nombre repetido) ";
            }
            if (!setValidate.has(apellido1.trim())) {
                setValidate.add(apellido1.trim());
            }else{
                spanError.textContent += " (1er apellido repetido) ";
            }
            if (!setValidate.has(apellido2.trim())) {
                setValidate.add(apellido2.trim());
            }else{
                spanError.textContent += " (2do apellido repetido) ";
            }
        }
    }

    function validateNombreApellidos(){
        let regex = /(\s?[a-zA-Z]+\s)?(\s?[a-zA-Z]+\s),(\s?[a-zA-Z]+\s?)$/g;
        let infoInput = input.value;
        let values = regex.exec(infoInput);

        try {
            if(values !== null){
                if(values[2] === undefined){
                    spanError.textContent = "";
                    [, apellido1, , rnombre] = values;
                    nombre.innerHTML = 'Nombre: <b>'+rnombre+'</b>';
                    apellidos.innerHTML = 'Apellidos: <b>'+apellido1+'</b>';
                    let arg = [rnombre, apellido1];
                    validarSetCollection(...arg);
                }else{
                    spanError.textContent = "";
                    [, apellido2, apellido1, rnombre] = values;
                    nombre.innerHTML = 'Nombre: <b>'+rnombre+'</b>';
                    apellidos.innerHTML = 'Apellidos: <b>' + apellido1 + '</b>, <b>' + apellido1 + '</b>';
                    let arg = [rnombre, apellido1, apellido2];
                    validarSetCollection(...arg);
                }
            }else{
                let miErrorException = new ErrorException(
                    "Error. Formato correcto: Manera Correcta, Nombre",
                    "error"
                );
                  throw miErrorException;
            }
        } catch (error) {
            spanError.textContent = error.message;
        }

    }
    window.addEventListener("load", init);

}