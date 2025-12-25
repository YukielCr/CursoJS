// String 

// Concatenacion
let myName = "Yukiel"
let greeting = "Hola, " + myName+"!"
let email = myName.toLowerCase() + "@gmail.com"
console.log(greeting)
console.log(typeof greeting)

//longitud
console.log(greeting.length)

// Accesos a caracteres
console.log(greeting[0])
console.log(greeting[1])

// Metodos comunes
console.log(greeting.toUpperCase())        // todo a mayusculas
console.log(greeting.toLocaleLowerCase())  // todo a minusculas
console.log(greeting.indexOf("Yukiel"))   // indice de la primera aparicion de un substring
console.log(greeting.includes("Yukiel")) // si incluye un substring
console.log(greeting.slice(0,10))
console.log(greeting.replace("Yukiel", "Tokio"))
//greeting.

// Template literals (plantillas literales)
let mensaje= `Hola este  es mi
curso de javaScript`
console.log(mensaje)

console.log(`Saludos, ${myName}. Bienvenido al curso!, mi email es ${email}`)
console.log(`Hola ${myName}`)