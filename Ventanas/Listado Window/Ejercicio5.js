{
    function comienza() {
        let ahora = new Date();
        let h = ahora.getHours();
        let m = ahora.getMinutes();
        let s = ahora.getSeconds();
        m = compruebaHora(m);
        s = compruebaHora(s);
        document.getElementById("tiempo").innerHTML = h + ":" + m + ":" + s;
        setTimeout(function(){ comienza() }, 500);
    }
    
    function compruebaHora(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function init() {
        comienza();
    }

    document.addEventListener("DOMContentLoaded", init);

}