/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 15
let b = 4   

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let suma= a + b
let resta= a - b
let multiplicacion= a * b
let division= a / b
let modulo= a % b
let exponente= a ** b

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
const isRaining = a > b
isRaining ? console.log("A es mayor que B"): console.log("B es mayor que A");

const tomarEdad= a<=b
tomarEdad ? console.log("A es menor igual a b") : console.log("A no es menor igual a b");


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(1>5)
console.log(5==="5")
console.log(10>2&&2>5)
console.log(10<=2||2>5)
console.log(10!=10)

// 5. Utiliza el operador lógico and
console.log(10>2&&2>5)
// 6. Utiliza el operador lógico or
console.log(10<=2||2>5)
// 7. Combina ambos operadores lógicos
console.log((10>2&&2<5)||(10<=2||2>5))
// 8. Añade alguna negación
console.log(10!=5)

// 9. Utiliza el operador ternario
let isTomar=true
isTomar ? console.log("Puedes tomar") : console.log("No puedes tomar");

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(((a + b) > (a - b)) && ((a * b) > (a / b)));