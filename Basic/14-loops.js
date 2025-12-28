// Loops o bucles

// for
for (let i = 0; i < 5; i++) {
    console.log(`Iteración número ${i}`);
}

for (let i = 0; i < 10; i++) {
    console.log(`Hola ${i + 1}`);
}

const numeros = [10, 20, 30, 40, 50]
for (let i = 0; i < numeros.length; i++) {
    console.log(`Elemento ${i} es: ${numeros[i]}`);
}

// while
let i = 0
while (i < 5) {
    console.log(`Hola ${i}`);
    i++
}

// Bucle Infinito (CUIDADO)
// while(true){
//     console.log("Esto es un bucle infinito");
// }

// do while
console.log(i)
do {
    console.log(`Hola desde do while ${i}`);
    i++
} while (i < 10)



// for of
let myArray = ["Elemento1", "Elemento2", "Elemento3"]

let mySet = new Set(["Elemento1", "Elemento2", "Elemento3", "Elemento4"])

myMap = new Map([
    ["name", "Yukiel"],
    ["age", 21],
    ["email", "yuki@gmail.com"],
    ["phone", 7771999763],
    ["address", "Juan Escutia 123"]
])
for (let valor of myArray) {
    console.log(valor);
} 
for (let valor of mySet) {
    console.log(valor);
} 
for (let valor of myMap) {
    console.log(valor);
}

myString = "Hola Mundo"
for (let char of myString) {
    console.log(char);
}

// Buenas Practicas
// Nota esta forma hay que checarla no la habia realizo antes
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        console.log("i es igual a 3, se salta esta iteración");
        continue; // Salta a la siguiente iteración
    }else if (i === 2) {
        console.log("i es igual a 4, se rompe el bucle");
        break; // Sale del bucle
    }
    console.log(`Iteración número ${i}`);
}