{
    /**
     * @author Javier González
     */
    function Gato(nombre,fechaNac,raza,peso){
        this.nombre = nombre;
        this.fechaNac = fechaNac;
        this.edad = getEdad(fechaNac);
        this.raza = raza;
        this.peso = peso;
        
    }
    Gato.prototype.isEnfermo = false;

    Gato.prototype.isDurmiendo = false;

    Gato.prototype.comprobarEstado = function () {
        if (!this.isPesoValido(this.peso))
            throw new Error(this.nombre+" ha pasado a mejor vida.");
    }

    Gato.prototype.jugar = function(){
        this.comprobarEstado();
        this.peso--;
        this.comprobarEstado();
    }
    Gato.prototype.comer= function(){
        this.comprobarEstado();
        this.peso++;
        this.comprobarEstado();
    }
    Gato.prototype.dormir = function() {
        this.isDurmiendo = true;
    }
    Gato.prototype.enfermo = function() {
        this.isEnfermo = true;
    }
         
    Gato.prototype.getNombre = function(){
        return this.nombre;
    }
    Gato.prototype.getRaza = function(){
        return this.raza;
    }
    Gato.prototype.getFecha = function(){
        return this.fechaNac;
    }
    function getEdad(fechaNac){
        return (new Date()).getFullYear() - fechaNac.split('/')[2];
    }
    
    Gato.prototype.getPeso = function(){
        return this.peso;
    }
    Gato.prototype.isPesoValido = function (peso) {
        return peso >= 1 && peso <= 15 && peso != "";
    }
    Gato.prototype.getEnfermo = function(){
        return this.isEnfermo;
    }
}