function opcion () {
    return prompt ("Seleccione el tipo de asiento.\n 1.Asiento Normal $5.000.- \n 2.Asiento Preferencial $9.000.- \n 3.Asiento VIP $13.000.-")
}

let tipoasiento = opcion();

function normal () {
    let cantidad;
    do {
        cantidad = Number(prompt("Ingrese la cantidad de asientos que desee reservar:"));  
            if (cantidad < 0) {
                alert("La cantidad de asientos debe ser un número positivo");
            }
    }while (cantidad < 0);

    let precio = 5000;
    let total = cantidad * precio;

    if (cantidad >= 5) {
        let descuento = 10; 
        let preciodescuento = (total * descuento)/ 100;
        let preciototal = total - preciodescuento;
        alert("El precio total de su reserva con descuento es:" + preciototal)
    }
    else {
        alert("El precio total de su reserva es: " + total);
    }
}

function preferencial () {
    let cantidad;
    do {
        cantidad = Number(prompt("Ingrese la cantidad de asientos que desee reservar:"));  
            if (cantidad < 0) {
                alert("La cantidad de asientos debe ser un número positivo");
            }
    }while (cantidad < 0);

    let precio = 9000;
    let total = cantidad * precio;

    if (cantidad >= 5) {
        let descuento = 10; 
        let preciodescuento = (total * descuento)/ 100;
        let preciototal = total - preciodescuento;
        alert("El precio total de su reserva con descuento es: " + preciototal);
    }
    else {
        alert("El precio total de su reserva es: " + total);
    }
}


function vip () {
    let cantidad;
    do {
        cantidad = Number(prompt("Ingrese la cantidad de asientos que desee reservar:"));  
            if (cantidad < 0) {
                alert("La cantidad de asientos debe ser un número positivo");
            }
    }while (cantidad < 0);

    let precio = 13000;
    let total = cantidad * precio;

    if (cantidad >= 5) {
        let descuento = 10; 
        let preciodescuento = (total * descuento)/ 100;
        let preciototal = total - preciodescuento;
        alert("El precio total de su reserva con descuento es: " + preciototal);
    }
    else {
        alert("El precio total de su reserva es: " + total);
    }
}


switch (tipoasiento) {
    case "1":
        normal()
        break;
    case "2":
        preferencial()
        break;
    case "3":
        vip();
        break
    default:
        alert("Tipo de asiento no valido")
        break;
}