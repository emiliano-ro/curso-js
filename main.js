// Productos

let stock;
let id;
let nombre = "";
let precio;

const producto = [
    {
        nombre: "turbo",
        id: 1,
        precio: 60000,
        stock: 1
    },
    {
        nombre: "intercooler",
        id: 2,
        precio: 55000,
        stock: 1
    },
    {
        nombre: "admision",
        id: 3,
        precio: 87000,
        stock: 2
    },
    {
        nombre: "multiple escape",
        id: 4,
        precio: 42000,
        stock: 0
    },
    {
        nombre: "wideband",
        id: 5,
        precio: 62000,
        stock: 6
    }
];

// variables generales carrito

let prodIngresado = "";
let agregarOtro;
let cIngresada = 0;
let cProductos;
let pSuma = 0;
let prodAgregados = "";
let coma = ", ";


function aProdCarrito() {

    do {
        prodIngresado = prompt("Ingresa el nombre del producto según se muestra a continuación\nTurbo\nIntercooler\nAdmision\nMultiple escape\nWideband");
        cIngresada = parseInt(prompt("Ingresa la cantidad que deseas comprar"));
        switch (prodIngresado) {
            case producto[0].nombre:
                if (producto[0].stock < cIngresada) {
                    alert("No disponemos de esa cantidad");
                    cantidad = 0;
                    pSuma = 0;
                }
                else if (producto[0].stock == 0) {
                    alert("No hay stock de este producto");
                    cantidad = 0;
                    pSuma = 0;
                }
                else {
                    pSuma += producto[0].precio * cIngresada;
                    producto[0].stock -= cIngresada;
                    prodAgregados = prodAgregados + prodIngresado + coma;
                }
                break;

            case producto[1].nombre:
                if (producto[1].stock < cIngresada) {
                    alert("No disponemos de esa cantidad");
                    cantidad = 0;
                    pSuma = 0;
                }
                else if (producto[1].stock == 0) {
                    alert("No hay stock de este producto");
                    cantidad = 0;
                    pSuma = 0;
                }
                else {
                    pSuma += producto[0].precio * cIngresada;
                    producto[1].stock -= cIngresada;
                    prodAgregados = prodAgregados + prodIngresado + coma;
                }
                break;

            case producto[2].nombre:
                if (producto[2].stock < cIngresada) {
                    alert("No disponemos de esa cantidad");
                    cantidad = 0;
                    pSuma = 0;
                }
                else if (producto[2].stock == 0) {
                    alert("No hay stock de este producto");
                    cantidad = 0;
                    pSuma = 0;
                }
                else {
                    pSuma += producto[0].precio * cIngresada;
                    producto[2].stock -= cIngresada;
                    prodAgregados = prodAgregados + prodIngresado + coma;
                }
                break;

            case producto[3].nombre:
                if (producto[3].stock < cIngresada) {
                    alert("No disponemos de esa cantidad");
                    cantidad = 0;
                    pSuma = 0;
                }
                else if (producto[3].stock == 0) {
                    alert("No hay stock de este producto");
                    cantidad = 0;
                    pSuma = 0;
                }
                else {
                    pSuma += producto[0].precio * cIngresada;
                    producto[3].stock -= cIngresada;
                    prodAgregados = prodAgregados + prodIngresado + coma;
                }
                break;

            case producto[4].nombre:
                if (producto[4].stock < cIngresada) {
                    alert("No disponemos de esa cantidad");
                    cantidad = 0;
                    pSuma = 0;
                }
                else if (producto[4].stock == 0) {
                    alert("No hay stock de este producto");
                    cantidad = 0;
                    pSuma = 0;
                }
                else {
                    pSuma += producto[0].precio * cIngresada;
                    producto[4].stock -= cIngresada;
                    prodAgregados = prodAgregados + prodIngresado + coma;
                }
                break;

            default:
                alert("Ese producto no existe");
                break;
        }
        agregarOtro = confirm("¿Querés agregar otro producto?");
        console.log(prodAgregados);
    } while (agregarOtro)
}

// sistema de cuotas

let quiereCuotas;
const cuotas3 = 1.0539;
const cuotas6 = 1.1082;
const cuotas12 = 1.2222;
const cuotas18 = 1.4053;
const cuotas24 = 1.5585;
let pFinal = 0;
let total = 0;

function calcCuotas(){

    pIngresado = parseInt(prompt("Ingresa el plan de pago a continuación según se muestra en la lista (Solo numeros de cuotas)\n3 cuotas\n6 cuotas\n12 cuotas\n18 cuotas\n24 cuotas"));

    switch (pIngresado) {
        case 3:
            cCuotas = 3;
            total = pSuma * cuotas3;
            pFinal = total / 3;
            break;
        case 6:
            cCuotas = 6;
            total = pSuma * cuotas6;
            pFinal = total / 6;
            break;
        case 12:
            cCuotas = 12;
            total = pSuma * cuotas12;
            pFinal = total / 12;
            break;
        case 18:
            cCuotas = 18;
            total = pSuma * cuotas18;
            pFinal = total / 18;
            break;
        case 24:
            cCuotas = 24;
            total = pSuma * cuotas24;
            pFinal = total / 24;
            break;
        default:
            console.log("Ese plan no existe");
            break;
    }
    console.log(total);
}


function comprarProd() {

    aProdCarrito();

    quiereCuotas = confirm("Querés pagar en cuotas?");

    if (quiereCuotas == true) {
        calcCuotas();
        console.log("Agregaste los siguientes productos: %s con un total de %i$ en %i cuotas de %i$.", prodAgregados, total, cCuotas, pFinal);
    }
    else if(quiereCuotas == false){
        console.log("Agregaste los siguientes productos: %s con un total de %i$", prodAgregados, pSuma);
    }
}

comprarProd();


