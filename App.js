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

var producto1 = new Producto("https://www.suat.com.uy/upcms/thumbs/648x365/novedades/imagen/955_big.jpg","Banana", "banana ecuador", 60);
var producto2 = new Producto("https://img.huffingtonpost.com/asset/5ef9ffab250000a502c28ec2.jpeg?ops=scalefit_720_noupscale&format=webp", "Manzana", "manzana deliciosa", 90);
var producto3 = new Producto("https://static9.depositphotos.com/1642482/1148/i/600/depositphotos_11489464-stock-photo-pears.jpg", "Pera", "pera especial", 100);
var producto4 = new Producto("https://cdn1.frutapasion.es/wp-content/uploads/2019/11/mandarina-0.jpg","mandarina","mandarina 100% natural", 120);
var producto5 = new Producto("https://static1.abc.es/media/bienestar/2020/11/06/naranja-kOMF--620x349@abc.jpg", "Naranja","naranja para exprimido", 150);
var producto6 = new Producto("https://www.gastronomiavasca.net/uploads/image/file/5702/berenjena1.jpg", "Berenjena","berenjena de temporada", 94);
var producto7 = new Producto("https://i.blogs.es/f466ab/1366_2000-2-/1366_2000.jpg", "Apio","apio de huerta", 40);
var producto8 = new Producto("https://tomatissimocr.com/wp-content/uploads/2014/11/tomate.jpg", "Tomate","tomate para ensalada", 250);
var producto9 = new Producto("https://fundaciondelcorazon.com/images/stories/corazon-facil/impulso-vital/uvas.jpg", "Uva","uva especial", 300);
var producto10 = new Producto("https://imagenes.t13.cl/images/original/2018/08/1535055213-frutillas-istock.jpg", "Frutilla","frutilla de campo", 350);
var producto11 = new Producto("https://biomarket.com.ar/wp-content/uploads/2019/07/2001390010004.jpg", "Zapallo","zapallo calabaza", 100);
var producto12 = new Producto("https://biotrendies.com/wp-content/uploads/2015/07/Sandia.jpg", "Sandia","sandia especial", 50);
var producto13 = new Producto("https://soycomocomo.es/media/2019/03/zanahorias.jpg", "Zanahoria","zanahoria espacial para ensalada", 60);
var producto14 = new Producto("https://static3.abc.es/media/salud/2019/05/17/brocoli-kOoH--620x349@abc.jpg", "Brocoli","brocoli de huerta", 45);
var producto15 = new Producto("https://st.depositphotos.com/1020804/1561/i/450/depositphotos_15616789-stock-photo-parsley.jpg", "Peregil","peregil de huerta", 50);
var producto16 = new Producto("https://geant.vteximg.com.br/arquivos/ids/252499-1000-1000/410024.jpg?v=637284323379870000", "Cherry","tomates cherry", 500);
var producto17 = new Producto("https://static1.abc.es/media/bienestar/2020/09/01/lechuga-k7y--1200x630@abc.jpg", "Lechuga","legucha criolla", 70);
var producto18 = new Producto("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS21OuzKJl3tjFNukpoKKbmkTO9iCNwd6WLg&usqp=CAU", "Ciruela","ciruela de estacion", 40);
var producto19 = new Producto("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMekNZrVqLzw-POqGIg7jWu_TYt4BTecjSw&usqp=CAU", "Pomelo","pomelo dulce", 80);
var producto20 = new Producto("https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/09/11/59b612d1476cf.jpeg", "Limon","limon especial", 90);
var producto21 = new Producto("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GS14uZuNVbgpuU9tFew8XhI4UOzPLsjLzA&usqp=CAU", "Puerro","puerro de huerta", 15);
var producto22 = new Producto("http://frutosnaturales.com.ar/wp-content/uploads/2020/04/Espinaca-1.jpg", "Espinaca","espinaca natural", 80);
var producto23 = new Producto("https://www.lavanguardia.com/files/article_main_microformat/uploads/2018/07/13/5e99856f0b685.jpeg", "Cebolla","cebolla de calidad", 120);
var producto24 = new Producto("https://www.laprensagrafica.com/__export/1508186157976/sites/prensagrafica/img/2017/10/16/pepinos_2.jpg_1902800913.jpg", "Pepino","pepino de oferta", 100 );
var producto25 = new Producto("https://www.clikisalud.net/wp-content/uploads/2020/03/maneras-consumo-mango-protege-salud.jpg", "Mango","mango natural", 140 );
var producto26 = new Producto("https://www.cucinare.tv/wp-content/uploads/2019/04/Batata.jpg", "Batata","batata de estacion", 90);
var producto27 = new Producto("https://static1.abc.es/media/familia/2018/04/03/kiwi-kC0--620x349@abc.jpg", "Kiwi","kiwi especial", 120);
var producto28 = new Producto("https://vivanda.vtexassets.com/arquivos/ids/224584/20171835.jpg?v=637417663435230000", "Papa","papa blanca", 80);
var producto29 = new Producto("https://www.gob.mx/cms/uploads/article/main_image/45428/ajo.jpg","Ajo","ajo de oferta", 110);
var producto30 = new Producto("https://blog-static.hola.com/farmaciameritxell/files/2016/12/remolacha.jpg", "Remolacha","remolacha de oferta", 70);

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
productos.push(producto13);
productos.push(producto14);
productos.push(producto15);
productos.push(producto16);
productos.push(producto17);
productos.push(producto18);
productos.push(producto19);
productos.push(producto20);
productos.push(producto21);
productos.push(producto22);
productos.push(producto23);
productos.push(producto24);
productos.push(producto25);
productos.push(producto26);
productos.push(producto27);
productos.push(producto28);
productos.push(producto29);
productos.push(producto30);


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





