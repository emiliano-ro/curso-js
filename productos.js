let stock;
let id;
let nombre = "";
let precio;
let categoria = "";
let destacado = "";

const producto = [
    {
        nombre: "Turbo K03 Bora, Golf GTI, Audi A3 1.8T 180 HP",
        id: 1,
        precio: 65000,
        stock: 5,
        categoria: "turbos",
        destacado: "no",
        img: "../images/bturbo.jpg"
    },
    {
        nombre: "Intercooler upgrade Vw Golf Mk7 Audi A3 S3 8v 2.0t 1.8t Ftx",
        id: 2,
        precio: 65000,
        stock: 3,
        categoria: "intercooler",
        destacado: "si",
        img: "../images/intercoolermk5.jpg"
    },
    {
        nombre: "Multiple de admision ORP VW Audi S3 GTI MK7 2.0 TSI MQB Gen3",
        id: 3,
        precio: 87000,
        stock: 3,
        categoria: "multiplesadm",
        destacado: "no",
        img: "../images/admtsi.jpg"
    },
    {
        nombre: "Multiple escape T3 Bipulsativo 2.0 tfsi tsi VW Audi - SPA",
        id: 4,
        precio: 42000,
        stock: 0,
        categoria: "multipleesc",
        destacado: "no",
        img: "../images/mavento.jpg"
    },
    {
        nombre: "Cuerpos De Inyección 40mm Dcoe Fajs",
        id: 5,
        precio: 62000,
        stock: 6,
        categoria: "cuerpos",
        destacado: "no",
        img: "../images/cuerpos.jpg"
    },
    {
        nombre: "Escape completo + downpipe acero inoxidable Toyota Yaris GR",
        id: 6,
        precio: 120000,
        stock: 3,
        categoria: "escapes",
        destacado: "si",
        img: "../images/downpipegr.jpg"
    },
    {
        nombre: "Kit Agua Metanol AEM V3 1.15 Gall Bora Vento Golf Scirocco",
        id: 7,
        precio: 82000,
        stock: 3,
        categoria: "metanol",
        destacado: "no",
        img: "../images/metanol.jpg"
    },
    {
        nombre: "Bielas forjadas VW Bora Vento Gol 144x22 800hp SAENZ",
        id: 8,
        precio: 250000,
        stock: 5,
        categoria: "bielas",
        destacado: "si",
        img: "../images/bielasvento.jpg"
    },
    {
        nombre: "Column Pod Vw Golf Bora Audi A3 Porta Relojes",
        id: 9,
        precio: 15000,
        stock: 5,
        categoria: "accesorios",
        destacado: "si",
        img: "../images/cpod.jpg"
    },
    {
        nombre: "Kit admision directa REVO AUDI S4 S5 3.0 TFSI B8 / 8.5",
        id: 10,
        precio: 90000,
        stock: 3,
        categoria: "admision",
        destacado: "si",
        img: "../images/kadm.jpg"
    },
    {
        nombre: "Bomba de nafta interna AEM 1.8T A3 Bora Golf 320lph 50-1000",
        id: 11,
        precio: 250000,
        stock: 5,
        categoria: "accesorios",
        destacado: "si",
        img: "../images/bcbora.jpg"
    },
    {
        nombre: "Escape Downpipe VW Vento Scirocco Golf Seat 2.0TFSI TSI FTX",
        id: 12,
        precio: 80000,
        stock: 3,
        categoria: "escapes",
        destacado: "si",
        img: "../images/dpipev.jpg"
    },
    {
        nombre: "Intercooler Universal 90cm X 30cm X 10cm Ftx Fueltech",
        id: 13,
        precio: 250000,
        stock: 4,
        categoria: "intercooler",
        destacado: "si",
        img: "../images/intercooler.jpg"
    },
    {
        nombre: "Conjunto Central Turbo IS38 Audi S3 8v 2.0 TSI Master Power",
        id: 14,
        precio: 220000,
        stock: 2,
        categoria: "turbos",
        destacado: "no",
        img: "../images/nucleot.jpg"
    },
    {
        nombre: "Bobinas red x4 VW Audi Scirocco Vento 2.0 TFSI TSI Bosch",
        id: 15,
        precio: 100000,
        stock: 2,
        categoria: "bobinas",
        destacado: "no",
        img: "../images/bobinasred.jpg"
    },
];