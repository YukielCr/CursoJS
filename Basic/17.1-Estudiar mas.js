// Estudiar mas la funcion floecha

// Estudiar esta forma casi no lo ocupa
// Otra forma de hacer iteraciones 
myArray8.forEach((element)=>console.log(element))
myMap.forEach((element)=>console.log(element))
mySet.forEach((element)=>console.log(element))


const names=["a","b","c"]
names
const newNames=names.map(name=> `Hello ${name}`)
newNames

// Arrow Functions
const myFunc3=(name)=>{
    console.log(`Hola ${name}`)
}
myFunc3("Yukiel")

const myFunc4=(name)=>console.log(`Hola ${name}`)
myFunc4("Yukiel")
