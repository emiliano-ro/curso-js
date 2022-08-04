let stock;
let id;
let nombre = "";
let precio;

const producto = [
    {
        nombre: "Turbo K03 Bora, Golf GTI, Audi A3 1.8T 180 HP",
        id: 1,
        precio: 65000,
        stock: 4,
        img: "../images/bturbo.jpg"
    },
    {
        nombre: "Intercooler upgrade Vw Golf Mk7 Audi A3 S3 8v 2.0t 1.8t Ftx",
        id: 2,
        precio: 55000,
        stock: 1,
        img: "../images/intercoolermk5.jpg"
    },
    {
        nombre: "Multiple de admision ORP VW Audi S3 GTI MK7 2.0 TSI MQB Gen3",
        id: 3,
        precio: 87000,
        stock: 3,
        img: "../images/admtsi.jpg"
    },
    {
        nombre: "Multiple escape T3 Bipulsativo 2.0 tfsi tsi VW Audi - SPA",
        id: 4,
        precio: 42000,
        stock: 0,
        img: "../images/mavento.jpg"
    },
    {
        nombre: "Cuerpos De Inyección 40mm Dcoe Fajs",
        id: 5,
        precio: 62000,
        stock: 6,
        img: "../images/cuerpos.jpg"
    }
];

let titProd = document.getElementById("titProd");
titProd.className = "bTitulo eTitulo";
titProd.innerHTML = ` <h1>Productos destacados</h1>
`;

let sectionProd = document.getElementById("secProductos");
sectionProd.className = "row tienda-section";

let main = document.getElementById("main");
main.className = "dfondo";

for(const prod of producto){

    let sDesc = "";
    let colorStock = "";

    if(prod.stock === 0){
        sDesc = "No disponible";
        colorStock = "stockSin";
    }
    else if(prod.stock >= 3){
        sDesc = "Disponible";
        colorStock = "stockHay";
    }
    else if(prod.stock > 0 && prod.stock < 3){
        sDesc = "Crítico";
        colorStock = "stockCrit";
    }

    let divCard = document.createElement("div");
    divCard.className = "d-flex col-6 col-sm-6 col-xs-5 col-md-4 col-lg-3 col-xl-3 justify-content-center";

    let divProd = document.createElement("div")
    divProd.className = "anim producto aTiempo";
    divProd.innerHTML = ` <img src=${prod.img} class="producto__imagen">
    `;

    let divDesc = document.createElement("div");

    divDesc.className = "producto__desc";
    divDesc.innerHTML = `
                    <h2 class="producto__titulo">${prod.nombre}</h2>
                    <h3 class="producto__precio">$${prod.precio}</h3>
                    <h4 class="producto__precio">Stock:  <span class="${colorStock}">${sDesc}</span></h4>
                    <button class="producto__cbtn" id="agregar${prod.id}" type="button"> Agregar al carrito </button>
    `;
    sectionProd.append(divCard);
    divCard.append(divProd);
    divProd.append(divDesc);
};