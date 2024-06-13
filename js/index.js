let prestamos = [];

function calcularCuotas(prestamo) {
    let totalInteres = 0;
    for (let i = 1; i <= prestamo.cantidadCuotas; i++) {
        let cuotaSinInteres = prestamo.montoPrestamo / prestamo.cantidadCuotas;
        let interesCuota = (prestamo.montoPrestamo * prestamo.tasaInteres / 100) / prestamo.cantidadCuotas;
        let cuotaConInteres = cuotaSinInteres + interesCuota;
        totalInteres += interesCuota;
        console.log(`Cuota ${i}: $${cuotaConInteres.toFixed(2)}`);
    }
    let totalPago = prestamo.montoPrestamo + totalInteres;
    console.log(`En total, usted pagará: $${totalPago.toFixed(2)}`);
}

function solicitarPrestamo() {
    let usuario = prompt("Ingrese su nombre de usuario: ");
    let edad = parseInt(prompt("Ingrese su edad: "));
    let dni = prompt("Ingrese su DNI: ");
    let montoPrestamo = parseInt(prompt("Ingrese el monto del préstamo que desea solicitar: "));
    let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas a pagar: "));
    let tasaInteres = 10; 

    let prestamo = {
        usuario: usuario,
        edad: edad,
        dni: dni,
        montoPrestamo: montoPrestamo,
        cantidadCuotas: cantidadCuotas,
        tasaInteres: tasaInteres
    };

    prestamos.push(prestamo);

    if (edad >= 18 && montoPrestamo >= 50000) {
        calcularCuotas(prestamo);
    } else {
        console.log(`Usuario ${usuario} (DNI: ${dni}) no puede acceder al préstamo.`);
    }
}

function mostrarTodosLosPrestamos() {
    console.log("Todos los préstamos solicitados:");
    prestamos.forEach(prestamo => {
        console.log(`Usuario: ${prestamo.usuario}, Edad: ${prestamo.edad}, DNI: ${prestamo.dni}, Monto: ${prestamo.montoPrestamo}, Cuotas: ${prestamo.cantidadCuotas}`);
    });
}

solicitarPrestamo();
mostrarTodosLosPrestamos();
