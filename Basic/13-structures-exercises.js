/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales=["perro", "gato", "elefante", "tigre", "leon"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("jirafa"); // al principio
animales.push("cebra");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
console.log(`Todos los animales: ${animales}`);
animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene cinco libros
let libros=new Set(["1984", "Cien Años de Soledad", "Don Quijote", "El Principito", "Moby Dick"]);
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido
libros.add("Hamlet");
libros.add("1984");
console.log(libros);

// 6. Elimina uno concreto a tu elección
libros.delete("Cien Años de Soledad")
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap=new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
let mes=5;
if(myMap.has(mes)){
    console.log(`El mes número 5 es: ${mes}`, myMap.get(mes));
}else{
    console.log("El mes no existe en el mapa.");
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("verano", ["Junio", "Julio", "Agosto"]);
console.log(myMap);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray=["Elemento1", "Elemento2", "Elemento3", "Elemento1"];
let mySet=new Set(myArray);
myMap.set("miSet", mySet);
console.log(myMap);