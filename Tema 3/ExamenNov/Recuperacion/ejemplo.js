{
    let textoIntro;
    let muestra;

    function base(){
        textoIntro = document.getElementById("texto");
        muestra = document.getElementById("mostrarNomb");

        textoIntro.addEventListener("blur", localStor);
    }

    function mensajes() {
        base();
        muestra.innerHTML = textoIntro.value;
    }

    function conStorage(daNombre){
        base();
        if(daNombre !== null){
            if(textoIntro.length == 0){
                muestra.innerHTML = "CAMPO VACIO";
            }else{
                muestra.innerHTML = textoIntro.value;
            }
        }
    }

    function localStor() {
        if(localStorage.getItem('daNombre') == null){
            localStorage.setItem('daNombre', 0);
            conStorage(localStorage.getItem('daNombre'));
        }else{
            localStorage.setItem('daNombre', textoIntro.value);
            conStorage(localStorage.getItem("daNombre"));
        }
    }

    function init(){
        localStor();
    }

    window.addEventListener("load", init);
}