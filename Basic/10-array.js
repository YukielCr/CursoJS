// array

//Declaracion
let myarray=[]  //Este es ma utilizado
let myarray2=new Array()

console.log(myarray)
console.log(myarray2)

//Inicializacion 

myarray=[3]
myarray2=new Array(3)

console.log(myarray)
console.log(myarray2)

myarray=["a","b","c","d","e","f","g","h","i",7]
myarray2=new Array("a","b","c","d","e","f","g","h","i",7)

console.log(myarray)
console.log(myarray2)

myarray2=new Array(3)
myarray2[0]="Yukiel"
myarray2[1]="Ana"
myarray2[5]="Juan"
console.log(myarray2)

myarray=[]
myarray[2]="Yukiel"
// myarray[0]="Yukiel"
myarray[1]="Ana"
console.log(myarray)


// Metodos comunes
myarray=[]
myarray.push("Elemento1")
myarray.push("Elemento2")
myarray.push("Elemento3")
myarray.push(21)
console.log(myarray)

console.log(myarray.pop())
console.log(myarray.pop())
console.log(myarray)

// Shift y Unshift
console.log(myarray.shift())
console.log(myarray)

//Agregar elementos al inicio
myarray.unshift("Elemento1")
myarray.unshift("Elemento0")
console.log(myarray)

console.log(myarray.length)

// Clear
//myarray=[]
// Otra forma de eliminar todos los elementos
myarray.length=0
console.log(myarray)

// Slice
myarray.push("Elemento1","Elemento2","Elemento3",37,true)
myarray2=myarray.slice(1,3) 

console.log(myarray)
console.log(myarray2)

// Splice
console.log(myarray)
myarray.splice(1,3) //Elimina desde la posicion 1, 2 elementos
console.log(myarray)

// Agregar elementos con splice
myarray=["Elemento1","Elemento2","Elemento3",37,true]
myarray.splice(1,2,"Nuevo Elemento")
console.log(myarray)