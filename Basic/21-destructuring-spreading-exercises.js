/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let numeros=[10,20,30,40,50]
let [x,,,,y]=numeros
// console.log(x)
// console.log(y)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
numeros=[10,20,30,40,50]
let [a=0,b=0,c=0,d=0,i=0,f=0]=numeros
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(i)
// console.log(f)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

// Declaracion del objeto perosona

let men={
    name:"Yuki",
    age:21,
    walk:function(){
        console.log("the man walking naw")
    },
    job:{
        work:"The man is working now",
        place:"The city center",
        time:"every day",
        drink:function(){
            console.log("The man drick coffi with milk")
        }
    }
}

let {name,age,job:{work}}=men
// console.log(work)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name:no,age:ag,job:{work:wo,place:pl}}=men
// console.log(pl)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {name:no1,age:ag1,job:{work:wo1,place:pl1}}=men
// console.log(wo1)
// console.log(pl1)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array1=[1,2,3]
let array2=[4,5,6]
let combinado=[...array1,...array2]
// console.log(combinado)

// 7. Usa propagación para crear una copia de un array

let copiaArray=[...array1]
// console.log(copiaArray)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let obj1={
    name:"kevin",
    age:25}
let obj2={
    name1:"Yuki2",
    age2:24}
let combinadoObj={...obj1,...obj2}
// console.log(combinadoObj)


// 9. Usa propagación para crear una copia de un objeto
let obj3={
    name1:"Yuki2",
    age2:24
}

let copia={obj3}
// console.log(copia)


// 10. Combina desestructuración y propagación
let myArray=[789,6,7,6,6,123]
let [nu1,,,,,nuf]=myArray
console.log(nu1)
console.log(nuf)

let myArray2=[11,22,33]

let com=[...myArray2,nu1,nuf]
console.log(com)