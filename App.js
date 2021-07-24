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
var producto4 = new Producto("https://cdn1.frutapasion.es/wp-content/uploads/2019/11/mandarina-0.jpg","mandarina","mandarina 100$ natural", 120);
var producto5 = new Producto("https://static1.abc.es/media/bienestar/2020/11/06/naranja-kOMF--620x349@abc.jpg", "Narajan","naranja para exprimido", 150);
var producto6 = new Producto("https://www.gastronomiavasca.net/uploads/image/file/5702/berenjena1.jpg", "Berenjena","berenjena de temporada", 94);
var producto7 = new Producto("https://i.blogs.es/f466ab/1366_2000-2-/1366_2000.jpg", "Apio","apio de huerta", 40);
var producto8 = new Producto("https://tomatissimocr.com/wp-content/uploads/2014/11/tomate.jpg", "Tomate","tomate para ensalada", 250);
var producto9 = new Producto("https://fundaciondelcorazon.com/images/stories/corazon-facil/impulso-vital/uvas.jpg", "Uva","uva especial", 300);
var producto10 = new Producto("https://imagenes.t13.cl/images/original/2018/08/1535055213-frutillas-istock.jpg", "Frutilla","frutilla de campo", 350);
var producto11 = new Producto("https://biomarket.com.ar/wp-content/uploads/2019/07/2001390010004.jpg", "Zapallo","zapallo calabaza", 100);
var producto12 = new Producto("https://biotrendies.com/wp-content/uploads/2015/07/Sandia.jpg", "Sandia","sandia especial", 50);

var productos = [];

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);
productos.push(producto9);
productos.push(producto10);
productos.push(producto11);
productos.push(producto12);


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





