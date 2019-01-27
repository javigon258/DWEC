{
    function Factura(empresa, cliente, productos) {
        this.empresa = empresa;
        this.cliente = cliente;
        this.setFecha(new Date())
        this.productos = productos;
        this.datosExtra = new DatosExtra(0, [], 0);
    }
    
    Factura.prototype.setFecha = function(fecha){
        this.fecha = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    }
    
    Factura.prototype.calFactura = function () {
        let totalProducto;
        for (let producto of this.productos) {
            totalProducto = producto.cantidad * producto.precio;
            this.datosExtra.baseImponible += totalProducto;
            this.datosExtra.agregarIva(producto.iva,totalProducto);
        }
        this.datosExtra.total = this.datosExtra.baseImponible + this.datosExtra.calcularIva();
    }
    
    Factura.prototype.mostrarTotal = function () {
        return this.datosExtra.total;
    }
}