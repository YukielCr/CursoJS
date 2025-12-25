/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1= "Hola"
let cadena2= "Mundo"
let resultado= cadena1 + " " + cadena2
console.log(resultado)

// 2. Muestra la longitud de una cadena de texto
console.log(resultado.length)

// 3. Muestra el primer y último carácter de un string
console.log(resultado[0])
console.log(resultado[resultado.length -1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(resultado.toUpperCase())
console.log(resultado.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let mensajeMultiplesLineas=`Este es un ejemplo 
de un mensaje de multiples lienas`
console.log(mensajeMultiplesLineas)

// 6. Interpola el valor de una variable en un string
let name= "Yukiel"
let completo= `Hola, mi nombre es ${name}`
console.log(completo)


// 7. Reemplaza todos los espacios en blanco de un string por guiones
let completo2= "Hola este es un mensaje completo"
let newMessage=completo2.replace(" ","_")
console.log(completo2.replace(/ /g,"_"))
console.log(newMessage)


// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(completo2.includes("mensaje"))

// 9. Comprueba si dos strings son iguales
let string1= "Hola"
let string2= "Hola"
console.log(string1 === string2)

// 10. Comprueba si dos strings tienen la misma longitud
let m1= "Hola"
let m2= "Hola"
console.log(m1.length == m2.length)
