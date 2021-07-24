export class Producto{

    constructor(URLimage, titulo, descripcion, precio){
        
        this.URLimage = URLimage;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    setURLimage(URLimage){this.URLimage = URLimage;}
    setTitulo(titulo){this.titulo = titulo;}
    setDescripcion(descripcion){this.descripcion = descripcion;}
    setPrecio(precio){this.precio = precio;}

    getURLimage(){return this.URLimage;}
    getTitulo(){return this.titulo;}
    getDescripcion(){return this.descripcion;}
    getPrecio(){return this.precio;}
    
    getInformacion(){return this.titulo+" "+this.descripcion+" "+this.precio;}
}

//export default Producto;