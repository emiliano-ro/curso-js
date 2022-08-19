let carrito = [];

let titProd = document.getElementById("titProd");
titProd.className = "bTitulo eTitulo";
titProd.innerHTML = ` <h1>Productos destacados</h1>
`;

let sectionProd = document.getElementById("secProductos");
sectionProd.className = "row tienda-section";

let main = document.getElementById("main-tienda");
main.className = "dfondo";

pintarProductos();

function pintarProductos() {

    for (const prod of producto) {

        let sDesc = "";
        let colorStock = "";

        if (prod.stock === 0) {
            sDesc = "No disponible";
            colorStock = "stockSin";
        }
        else if (prod.stock > 2) {
            sDesc = "Disponible";
            colorStock = "stockHay";
        }
        else if (prod.stock > 0 && prod.stock <= 2) {
            sDesc = "Consultar";
            colorStock = "stockCrit";
        }

        let divCard = document.createElement("div");
        divCard.className = "d-flex col-6 col-sm-6 col-xs-5 col-md-4 col-lg-3 col-xl-3 justify-content-center";

        let divProd = document.createElement("div");
        divProd.className = "anim producto aTiempo";
        divProd.innerHTML = ` <img src=${prod.img} class="producto__imagen">
        `;

        let divDesc = document.createElement("div");

        divDesc.className = "producto__desc";
        divDesc.innerHTML = `
                    <h2 class="producto__titulo">${prod.nombre}</h2>
                    <h3 class="producto__precio">$${prod.precio}</h3>
                    <h4 class="producto__precio">Stock: <span class="${colorStock}"> ${sDesc}</span></h4>
                    <button class="producto__cbtn" id="${prod.id}" type="button"> Agregar al carrito </button>
        `;

        sectionProd.append(divCard);
        divCard.append(divProd);
        divProd.append(divDesc);

        let bodyT = document.getElementById("bodyTienda");
        let divBtn = document.createElement("div");
        divBtn.className = "divCarritoNo";
        divBtn.innerHTML = `<p id="pBtn">Producto agregado al carrito!</p>
        `;

        let carBtn = document.getElementById(prod.id);

        carBtn.onclick = () => {
            carritoDiv();
        }

        bodyT.append(divBtn);

        function carritoDiv() {
            divBtn.className = "desdivprodAgregado";
            console.log("Agregaste un prod");
            setTimeout(carritoDivBorrar, 3000);
        }

        function carritoDivBorrar() {
            divBtn.className = "divCarritoNo";
        }

    };

    producto.forEach(prod => {
        document.getElementById(`${prod.id}`).addEventListener("click", function(){
            agregarAlcarrito(prod);
        });
    })
}

function agregarAlcarrito(productos) {
    carrito.push(productos);
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}