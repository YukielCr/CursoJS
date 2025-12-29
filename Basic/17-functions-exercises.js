/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
    return a + b
}

//console.log(5+5)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

myArray = [1, 998, 8, 2, 7, 3, 2, 5, 6, 888]

function numberMayor(numeros) {
    let numeroMayor = 0
    let position = 0
    for (let i = 0; i <= numeros.length; i++) {
        //console.log(numeros[i]);
        if (numeroMayor < numeros[i]) {
            //console.log(numeros[i]);
            numeroMayor = numeros[i]
            position = i + 1
        }
    }
    console.log(`El numero mayor es el de ${numeroMayor} en la pociocion ${position}`)
}

// numberMayor(myArray)

myArray = [1, 998, 8, 2, 7, 3, 2, 5, 6, 888]
function nuMayor(arre) {
    let mayor = 0
    let position = 0
    for (let valor of myArray) {
        if (mayor < valor) {
            mayor = valor
        }
    }
    console.log(`El numero mayor es el de ${mayor} en la pociocion ${position}`)
}

//nuMayor(myArray)


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let mensa = "Hola Mundo"

function vocales(men) {
    let nVocales = 0
    for (let char of men) {
        console.log(char);
        if(char.to==)
    }
}


vocales(mensa)
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado