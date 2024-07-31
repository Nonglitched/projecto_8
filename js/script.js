function calcularPresupuesto(ingresoTotal) {
    return {
        gastosNecesarios: ingresoTotal * 0.5,
        gastosOpcionales: ingresoTotal * 0.3,
        ahorroInversion: ingresoTotal * 0.2
    };
}

function programaFinanzasPersonales() {
    const claveCorrecta = "argenfin123";

    const nombre = prompt("Por favor, ingrese su nombre:");
    const clave = prompt("Por favor, ingrese su clave:");

    if (clave !== claveCorrecta) {
        console.log("Clave incorrecta. Acceso denegado.");
        return;
    }

    const edad = parseInt(prompt("Por favor, ingrese su edad:"));
    const ingresoTotal = parseFloat(prompt("Por favor, ingrese su ingreso total:"));

    if (isNaN(edad) || isNaN(ingresoTotal)) {
        console.log("Por favor, ingrese valores numéricos válidos para edad e ingreso.");
        return;
    }

    const presupuesto = calcularPresupuesto(ingresoTotal);

    console.log(`Bienvenido/a, ${nombre}!`);
    console.log(`Edad: ${edad} años`);
    console.log(`Ingreso total: $${ingresoTotal.toFixed(2)}`);
    console.log("\nDistribución de presupuesto según el modelo 50-30-20:");
    console.log(`Gastos necesarios (50%): $${presupuesto.gastosNecesarios.toFixed(2)}`);
    console.log(`Gastos opcionales (30%): $${presupuesto.gastosOpcionales.toFixed(2)}`);
    console.log(`Ahorro e inversión (20%): $${presupuesto.ahorroInversion.toFixed(2)}`);
}

programaFinanzasPersonales();