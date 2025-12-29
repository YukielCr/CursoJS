// Funciones


// Simple
function myFunc (){
    console.log("Hola desde mi función");
}

myFunc()

for (let i=0;i<5;i++){
    myFunc()
}


function myFuncWhithParams(name){
    console.log(`Hola ${name}`)
}

myFuncWhithParams("Yuki")
myFuncWhithParams("Arleth")

// Funciones anonimas
const myFunc2=function(name){
    console.log(`Hola ${name}`)
}

myFunc2("jhbj")

// Arrow Functions
const myFunc3=(name)=>{
    console.log(`Hola ${name}`)
}
myFunc3("Yukiel")

const myFunc4=(name)=>console.log(`Hola ${name}`)
myFunc4("Yukiel")

// Parametro
function sum(n1, n2){
    return n1+n2
}

console.log(sum(5,5))

// Por defecto
function sum2(a=0, b=0){
    console.log(a+b)
}
sum2(4,)

// retorno de valores
function mul(n1, n2){
    return n1*n2
}
console.log(mul(5,4))

// funciones anidades
function extern(){
    console.log("Funcion Externa")
    function intern(){
        console.log("Funcion Interna")
    }
    intern()
}
extern()
// intern() Fuera del scope


// Funciones de orden superior
console.log("")
const myFunc5=(name)=>console.log(`Hola ${name}`)

function applyFunc(func,param){
    func(param)
}
applyFunc(myFunc5,"Yukiel")

// ForEach

const myArray8=[1,2,3,4,5]
console.log(myArray8)


let mySet = new Set(["Elemento1", "Elemento2", "Elemento3", "Elemento4"])

myMap = new Map([
    ["name", "Yukiel"],
    ["age", 21],
    ["email", "yuki@gmail.com"],
    ["phone", 7771999763],
    ["address", "Juan Escutia 123"]
])


myArray8.forEach(function (element) {
console.log(element)
}
)

// Estudiar esta forma casi no lo ocupa
// Otra forma de hacer iteraciones 
myArray8.forEach((element)=>console.log(element))
myMap.forEach((element)=>console.log(element))
mySet.forEach((element)=>console.log(element))

