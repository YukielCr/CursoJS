// Console

// log 
console.log("Este es un mensaje de log");

// error
console.error("Este es un mensaje de error");
console.error("Error al conetarse a la base de datos", new Error("Conexión fallida"));

// warn
console.warn("Este es un mensaje de advertencia");

//info
console.info("Este es un mensaje de información");

// table
data=[
    ["Nombre", "Edad", "Ciudad"],
    ["Juan", 28, "Madrid"],
    ["María", 22, "Barcelona"],
    ["Pedro", 35, "Valencia"]
];

data2=[
    {name:"Yuki",age:21},
    {name:"Arleth",age:21},
]
console.table(data2);


//group
console.group("Grupo de mensajes");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.log("Mensaje 3");
console.groupEnd("Grupo de mensajes");


// time

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")

// assert

console.log("")
let age=17
console.assert(age>=18, "El usuario debe de ser mayor de edad")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace
function a(){
    b()
}   
function b(){
    console.trace("Seguimiento de la ejecución");
}

a()

console.clear()