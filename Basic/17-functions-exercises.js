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
let mensa = "aeiouaeiouaeiouaeiou"

function vocales(men) {
    let men2 = men
    let nVocales = 0
    for (let char of men2) {
        console.log(char);
        if (char == "a" | char == "e" | char == "i" | char == "o" | char == "u")
            nVocales++
    }
    console.log(nVocales);
}


// vocales(mensa)



// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let me1 = ["Hola Mundo", "Hello world"]

function menMayusculas(me) {
    let newm = me
    for (let char of newm) {
        console.log(char.toUpperCase())
    }
}

//menMayusculas(me1)

let me2 = ["Hola Mundo", "Hello world"]

function menMayusculas2(me) {
    let newm = []
    for (let char of me) {
        console.log(newm = [char.toUpperCase()])
    }
}

//menMayusculas2(me2)



let me3 = ["Hola Mundo", "Hello world"]

function comMa(cade) {
    let meyy = []
    console.log(cade.length)
    for (let i = 0; i < cade.length; i++) {
        console.log(i)
        meyy[i] = cade[i].toUpperCase();
    }
    console.log(meyy)
}
//comMa(me3)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

let numer = 5

function promoONo(number) {
    if (number % 2 == 0) {
        console.log(`El numero: ${number}, es primo`)
    } else {
        console.log(`El numero: ${number}, no es primo`)
    }
}

//promoONo(10)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let arra1 = [1, 5, 9, 8]
let arra2 = [2, 5, 7, 8]

function lisIguales(l1, l2) {
    // if(l1<l2)
    let lnew = []
    let cont = 0
    console.log(l2.length)
    for (let i = 0; i < l1.length; i++) {
        if (l1[i] === l2[i]) {
            lnew[cont] = l1[i]
            cont++
        }
    }
    console.log(lnew)
}
//lisIguales(arra1,arra2)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// Esta bien pero no cumple con lo solicitado 
let array1 = [1, 5, 9, 8, 15, 25]
let array2 = [2, 5, 7, 8]

function sumaArray(l1, l2) {
    let suma_arrays = []
    cantidadMayor = 0

    if (l1.length >= l2.length) {
        cantidadMayor = l1.length
    } else {
        cantidadMayor = l2.length
    }

    for (let i = 0; i < cantidadMayor; i++) {
        if (l1[i] == undefined) {
            suma_arrays[i] = l2[i]
        }
        if (l2[i] == undefined) {
            suma_arrays[i] = l1[i]
        } else {
            suma_arrays[i] = l1[i] + l2[i]
        }
    }
    console.log(suma_arrays)
}

// Esta bien 
/// Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let nu = [2, 4, 5, 6, 7]

function suma(ca) {
    let suma = 0
    for (let i = 0; i < ca.length; i++) {
        if (ca[i] % 2 == 0) {
            suma += ca[i];
        }
    }
    console.log(`La suma de los numeros pares es de: ${suma}`)
}

// suma(nu)



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let cad = [1, 2, 3, 4, 5]

function nuElevado(ca) {
    let newArray = []
    for (let i = 0; i < ca.length; i++) {
        newArray[i] = Math.pow(ca[i], 2);
    }
    console.log(newArray)
}

//nuElevado(cad)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let mensaje = "Yukiel ama a Arleth"

function inCadena(me) {
    let resultado = me
        .split(" ")   // convierte a array de palabras
        .reverse()    // invierte el orden
        .join(" ")    // vuelve a string

    return resultado
}

// console.log(inCadena(mensaje))

// 10. Crea una función que calcule el factorial de un número dado
function newFactorial(n){
    if(n==0){
        return 1
    }else{
        return n * newFactorial(n-1)
    }
}
console.log(newFactorial(5))

