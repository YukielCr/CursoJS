/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
console.error("Este es un mensaje de error desde la función de ejercicio");

// 2. Crea una función que utilice warn correctamente
console.warn("Este es un mensaje de advertencia desde la función de ejercicio");

// 3. Crea una función que utilice info correctamente
console.info("Este es un mensaje de información desde la función de ejercicio");

// 4. Utiliza table
const usuarios = [
    { nombre: "Ana", edad: 28, ciudad: "Sevilla" },
    { nombre: "Luis", edad: 34, ciudad: "Bilbao" },
    { nombre: "Marta", edad: 22, ciudad: "Granada" }
];
console.table(usuarios);

// Otra forma de usar table

const productos = [
    ["Producto", "Precio", "Cantidad"],
    ["Camiseta", 20, 3],
    ["Pantalón", 40, 2],
    ["Zapatos", 60, 1]
];
console.table(productos);

// 5. Utiliza group
console.group("Información de usuarios");
usuarios.forEach(usuario => {
    console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Ciudad: ${usuario.ciudad}`);
});

// 6. Utiliza time
console.time("Bucle de 1000000 iteraciones");
for (let i = 0; i < 1000000; i++) {
    // Simulación de trabajo
}
console.timeEnd("Bucle de 1000000 iteraciones");

// 7. Valida con assert si un número es positivo
function esPositivo(num) {
    console.assert(num >= 0, `El número ${num} no es positivo`);
}
esPositivo(10); // No mostrará nada
esPositivo(-5); // Mostrará un mensaje de error
// 8. Utiliza count
console.count("Click");
console.count("Click");
console.count("Click");
console.countReset("Click");
console.count("Click");


// 9. Utiliza trace
function a(){
    b()
}
function b(){
    console.trace("Seguimiento de la ejecución");
}
a()

// 10. Utiliza clear
console.log("Este es un mensaje antes de limpiar la consola.");
console.clear();
console.log("La consola ha sido limpiada.");