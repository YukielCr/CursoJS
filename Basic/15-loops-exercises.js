/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i=1; i<21;i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum=0
for(let i=1; i<=100;i++){
    sum+=i
}
console.log(sum)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let i=1
for(i; i<=50;i++){
    if(i%2 ==0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let names=["Yukiel","Rafael","Jonathan","Raguina","Jessica","Andrea","Made"]
console.log(names)

for(let varia=0;varia<names.length;varia++){
    console.log(names[varia])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let palabra="Hola mundo como estas"
let contador=0
for(let char of palabra){
    if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
        contador++
    }
}
console.log(`Cantidad de vocales ${contador}`)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let myArrayNumber=[5,1,2,3,4,5,6,7,8,9,1]
let multiplicasion=1
for (let valor of myArrayNumber) {
    multiplicasion*=valor
} 
console.log(multiplicasion)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let numeroSeleccionado=5
for(let io=1;io<=10;io++){
    console.log(`${numeroSeleccionado} x ${io} = ${numeroSeleccionado*io}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let mensaje="Yukiel"
let men2=[]
let men3=""
for(let men of mensaje){
    console.log(men)
    men2.unshift(men)
    //men3.unshift(men)
}
console.log("Nuevo mensaje: ",men2)
//console.log("Nuevo mensaje: ",men3)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibo=[0,1]

for(let j=2;j<10;j++){
    console.log(j)
    fibo[j]=fibo[j-1]+fibo[j-2]
    console.log(fibo)
}
console.log(fibo)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
// let ar=[90,1,2,50,8,30,7]
// let ar2=[]
// for(let i of ar){
//     if(i>=10){
//         console.log(i)
//         ar2.push(i)
//     }
// }
// console.log("Nuevo mensaje: ",ar2)