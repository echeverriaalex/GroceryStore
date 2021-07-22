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
        
        return this.titulo + this.descripcion + this.precio;
    }
}