let total = 0;
let pFinal = 0;
const iva = 1.21;
const cuotas3 = 1.0539;
const cuotas6 = 1.1082;
const cuotas12 = 1.2222;
const cuotas18 = 1.4053;
const cuotas24 = 1.5585;
let cCuotas = 0;
let final;

do {

    let precio = parseInt(prompt("Ingresa el precio de contado/efectivo del cual querés calcular los intereses"));

    let tieneIva = prompt("El precio ingresado anteriormente incluye iva? SI / NO");

    let pIngresado = parseInt(prompt("Ingresa el plan de pago a continuación según se muestra en la lista\n3 cuotas\n6 cuotas\n12 cuotas\n18 cuotas\n24 cuotas"));

    if (tieneIva == "si") {

        switch (pIngresado) {
            case 3:
                cCuotas = 3;
                total = precio * cuotas3;
                pFinal = total / 3;
                break;
            case 6:
                cCuotas = 6;
                total = precio * cuotas6;
                pFinal = total / 6;
                break;
            case 12:
                cCuotas = 12;
                total = precio * cuotas12;
                pFinal = total / 12;
                break;
            case 18:
                cCuotas = 18;
                total = precio * cuotas18;
                pFinal = total / 18;
                break;
            case 24:
                cCuotas = 24;
                total = precio * cuotas24;
                pFinal = total / 24;
                break;
            default:
                console.log("Ese plan no existe");
                break;
        }
    }

    else if (tieneIva == "no") {
        switch (pIngresado) {

            case 3:
                cCuotas = 3;
                total = precio * cuotas3 * iva;
                pFinal = total / 3;
                break;

            case 6:
                cCuotas = 6;
                total = precio * cuotas6 * iva;
                pFinal = total / 6;
                break;

            case 12:
                cCuotas = 12;
                total = precio * cuotas12 * iva;
                pFinal = total / 12;
                break;

            case 18:
                cCuotas = 18;
                total = precio * cuotas18 * iva;
                pFinal = total / 18;
                break;

            case 24:
                cCuotas = 24;
                total = precio * cuotas24 * iva;
                pFinal = total / 24;
                break;

            default:
                console.log("Ese plan no existe");
                break;
        }
    }
    if(total == 0 || cCuotas == 0 || pFinal == 0){
        continue;
    }
    else{
        console.log("El total con intereses sería %i en %i cuotas de %i", total, cCuotas, pFinal);
    }
    termina = confirm("¿Querés agregar otro producto?");    
} 
    while (termina);

    