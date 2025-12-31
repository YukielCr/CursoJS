/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let myMinecraft={
    name:"Steve",
    age:454,
    height: 55
}
// 2. Accede y muestra su valor

console.log(myMinecraft.age)

// 3. Agrega una nueva propiedad
myMinecraft.size2="Bigger"
console.log(myMinecraft)

// 4. Elimina una de las 3 primeras propiedades
delete myMinecraft.age
console.log(myMinecraft)

// 5. Agrega una función e invócala
// myMinecraft.hola2()=function na(){
//     console.log("Toy chambeando")
// }

myMinecraft.trabaja=function(){
    console.log("Toy chambeando")
}

console.log(myMinecraft)
console.log("")
myMinecraft.trabaja()

// 6. Itera las propiedades del objeto

for(let val in myMinecraft){
    console.log(val+" : "+myMinecraft[val])
}

// 7. Crea un objeto anidado

myMinecraft.job={
    fun1:"Hola",
    fun2:"Como",
    fun3:"Estas"
}

console.log(myMinecraft)
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(myMinecraft.job.fun1)
console.log(myMinecraft.job.fun2)
console.log(myMinecraft.job.fun3)

// 9. Comprueba si los dos objetos creados son iguales

let myMinecraft2={
    name:"Steve",
    age:454,
    height: 55
}

console.log(myMinecraft==myMinecraft2)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(myMinecraft.name==myMinecraft2.name)
