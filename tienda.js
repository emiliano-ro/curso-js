let carrito = [];
let totalCarrito = [];
let tSumaCarrito;

let cFiltros = ["destacados", "combos", "repro", "turbos", "bielas"];
let filtros = document.getElementById("barrafil");
filtros.innerHTML = `<nav id="nav" class="tNav nuLi efecto aTiempo">
                    <ul class="aCajas liFondo eTexto dMenu sTexto dLi tsLi">
                    <li><button id="${cFiltros[0]}">Destacados</button></li>

                    <li><button id="${cFiltros[1]}">Combos</button>
                    </li>

                    <li><button id="${cFiltros[2]}">Reprogramación</button>
                    </li>

                    <li><button id="${cFiltros[3]}">Turbos</button>
                    </li>

                    <li><button id="${cFiltros[4]}">Bielas</button>
                    </li>
`;


let titProd = document.getElementById("titProd");
titProd.className = "bTitulo eTitulo";
titProd.innerHTML = ` <h1 id="prodTitulo">Productos destacados</h1>
`;

let prodh1 = document.getElementById("prodTitulo")

let sectionProd = document.getElementById("secProductos");
sectionProd.className = "row tienda-section";

let main = document.getElementById("main-tienda");
main.className = "dfondo";

const turbo = producto.filter((el) => el.categoria.includes("turbos"));
const biela = producto.filter((el) => el.categoria.includes("bielas"));
const destacados = producto.filter((el) => el.destacado.includes("si"));

const totalSumado = (...numeros) => {
    return numeros.reduce((acc, numero) => acc + numero, 0);
};

pintar(destacados);

function agregarAlcarrito(productos) {
    carrito.push(productos);
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    Toastify({
        text: "Producto agregado al carrito!",
        duration: 2500,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        className: "toastFondo",
    }).showToast();
}

cFiltros.forEach(filtros => {
    document.getElementById(`${filtros}`).addEventListener("click", function () {

        if (filtros == "turbos") {
            pintar(turbo);
        }
        else if (filtros == "bielas") {
            pintar(biela);
        }
        else if (filtros == "destacados") {
            pintar(destacados);
        }

    });
});

function pintar(el) {

    sectionProd.innerHTML = ``;

    for (const prod of el) {

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
    };
    
    el.forEach(prod => {
        document.getElementById(`${prod.id}`).addEventListener("click", function () {
            agregarAlcarrito(prod);
            totalCarrito.push(prod.precio);
            tSumaCarrito = totalSumado(...totalCarrito);
            console.log(tSumaCarrito);
        });
    });
}
