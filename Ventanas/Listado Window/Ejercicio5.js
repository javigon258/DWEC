{
    function comienza() {
        let ahora = new Date();
        let h = ahora.getHours();
        let m = ahora.getMinutes();
        let s = ahora.getSeconds();
        // add a zero in front of numbers<10
        m = compruebaHora(m);
        s = compruebaHora(s);
        document.getElementById("tiempo").innerHTML = h + ":" + m + ":" + s;
        let t = setTimeout(function(){ comienza() }, 500);
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