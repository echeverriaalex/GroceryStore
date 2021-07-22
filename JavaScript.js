//export Producto;

class Producto{

    constructor(titulo, descripcion, precio){
        
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    getTitulo(){return this.titulo;}
    getDescripcion(){return this.descripcion;}
    getPrecio(){return this.precio;}
    
    getInformacion() {
        
        return this.titulo+" "+ this.descripcion+" "+ this.precio;
    }
}

var producto1 = new Producto("Banana", "banana ecuador", 60);
var producto2 = new Producto("Manzana", "manzana deliciosa", 90);

var productos = [];
productos.push(producto1);
productos.push(producto2);

productos.forEach(producto => {
    
    document.write(producto.getInformacion() + "<br>");
});
