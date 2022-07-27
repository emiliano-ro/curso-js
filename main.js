let total = 0;
let pFinal = 0;
let termina;
let precio;
let pIngresado;
const iva = 1.21;
const cuotas3 = 1.0539;
const cuotas6 = 1.1082;
const cuotas12 = 1.2222;
const cuotas18 = 1.4053;
const cuotas24 = 1.5585;


do {

    precio = parseInt(prompt("Ingresa el precio de contado/efectivo del cual querés calcular los intereses"));

    pIngresado = parseInt(prompt("Ingresa el plan de pago a continuación según se muestra en la lista\n3 cuotas\n6 cuotas\n12 cuotas\n18 cuotas\n24 cuotas"));

    calcular();

    console.log("El total con intereses sería %i en %i cuotas de %i", total, pIngresado, pFinal);

    termina = confirm("¿Querés cotizar otro valor?");

}while (termina);

function calcular() {

    if(pIngresado == 3){
        total = precio * cuotas3;
        pFinal = total / 3;
    }
    else if(pIngresado == 6){
        total = precio * cuotas6;
        pFinal = total / 6;
    }
    else if(pIngresado == 12){
        total = precio * cuotas12;
        pFinal = total / 6;
    }
    else if(pIngresado == 18){
        total = precio * cuotas18;
        pFinal = total / 18;
    }
    else if(pIngresado == 24){
        total = precio * cuotas24;
        pFinal = total / 24;
    }
    else{
        console.log("El numero de cuotas no es correcto")
    }
}
