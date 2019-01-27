{

    function atras(event) {
        event.preventDefault();
        history.back();
    }

    function annadir() {
        let valor = regex.exec(matI.value);
        document.getElementById("nombre");
        document.getElementById("libroFav");
        limpiarConcesionario();
        try {
            //regex.exec(matI.value);
            if (regex.test(matI.value)) {
                matI.value = "";
                mensaje.innerHTML = "";
                [matricula, , ,] = valor;
                if (existeEnConcesionario(matricula.trim())) {
                    mensaje.innerHTML = " Esa matricula ya existe en este concesionario";
                } else {
                    fecha = new Date().toLocaleString();
                    set.add([matricula.trim(), fecha]);
                    
                }
            } else {
                throw "Error en la matricula, antes de introducir compruebala en el validator";
            }
        } catch (e) {
            mensaje.innerHTML = e;
        } finally{
            mostrarConcesionario();
        }
    }

    function mostrarConcesionario() {
       /* limpiarConcesionario();
        cambiarUltimoCoche();*/
        set.forEach((value) => {
            concesionario.innerHTML += "<br>" + value[0] + "<br>" + value[1];
        });        
    }

    function existeEnConcesionario(matricula) {
        let existe = false;
        set.forEach((value) => {
            if (value[0] == matricula) {
                existe = true;
            }
        });
        return existe;
    }

    function init() {
        concesionario = document.getElementById("concesionario");
        document.getElementById("annadir").addEventListener("click", annadir);
        matI = document.getElementById("matI");
        document.getElementById("atras").addEventListener("click", atras);
        mensaje = document.getElementById("mensaje");
        crearContador();
        ultimoCoche();
    }

    window.addEventListener("load", init);
}