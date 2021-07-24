//import { Producto } from "./Producto.js";

class Producto{

    constructor(URLimage, titulo, descripcion, precio){
        
        this.URLimage = URLimage;
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

var producto1 = new Producto("https://greenshop.com.ar/wp-content/uploads/sites/9/2016/08/A.2.6-500GR.jpg","Banana", "banana ecuador", 60);
var producto2 = new Producto("https://img.huffingtonpost.com/asset/5ef9ffab250000a502c28ec2.jpeg?ops=scalefit_720_noupscale&format=webp", "Manzana", "manzana deliciosa", 90);
var producto3 = new Producto("https://static9.depositphotos.com/1642482/1148/i/600/depositphotos_11489464-stock-photo-pears.jpg", "Pera", "pera especial", 100);

var productos = [];

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);


 /*       
        const listaProductos = document.getElementById("lista-productos");

        productos.forEach(producto => {

        
            const element = document.createElement("div");

            element.innerHTML = `    
                <div>
                    <label> ${producto.getTitulo()} </label>
                    <label> ${producto.getDescripcion()}</label>
                    <label> ${producto.getPrecio()}</label>
                </div>`;
            
                
        });
        listaProductos.appendChild(element);

*/

        var div = document.getElementById('lista-productos');
  /*       
        const unDivConInfoDe = producto => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.textContent = producto.URLimage;
           
            div.textContent = producto.titulo;
            div.textContent = producto.descripcion;
            div.img = img;
            //div.textContent = producto.precio;
            // Acá seguís trabajando con el div poniendo la info desdeada
            return div;
        }
        productos.forEach( producto => divPadre.append(unDivConInfoDe(producto)));
*/

    info = "<div class='productos'>";

        for(var i = 0; i < productos.length; i++){

            info += "<article class='producto'>"
            info += "<h3 class='titulo'>"+productos[i].titulo+"</h3>";  
            info += "<img class='imagen' src='"+productos[i].URLimage+"'>";
            info += "<p class='descripcion'>"+productos[i].descripcion +"</p>";
            info += "<h2 class='precio'> $ "+productos[i].precio+"</h2>";
            info += "</article>";
        }
    
    info += "</div>"

        div.innerHTML = info;





