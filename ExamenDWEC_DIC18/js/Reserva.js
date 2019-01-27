{
    
    function Reserva(nombre, email, fechaLlegada, numeroNoches, numeroPersonas) {
        this.nombre = nombre;
        this.email = email;
        this.fechaLlegada = setFechaLlegada(fechaLlegada);
        this.numeroNoches = numeroNoches;
        this.numeroPersonas = numeroPersonas;
        this.edades = {
            menos20 : 0,
            en20y40 : 0,
            mas40 : 0
        };
    }
    
    Reserva.prototype.setFechaLlegada = function (FechaLlegada) {
        if(FechaLlegada=="" || new Date(FechaLlegada) >= new Date())
            throw new Error("Introduce una fecha válida");
        this.FechaLlegada = FechaLlegada;
    }

    Reserva.prototype.calcularNoches = function () {
        let fechaActual = new Date();
        let fechaCliente = new Date(this.FechaLlegada);
        let noches = fechaActual.getFullYear() - fechaCliente.getFullYear();
        if(fechaActual.getMonth()<fechaCliente.getMonth() || (fechaCliente.getMonth()==fechaActual.getMonth() && fechaCliente.getDate()<fechaActual.getDate()))
            --noches;
        return noches;
    }
    
}