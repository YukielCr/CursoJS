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
    {name:"AArlethna",age:21},
]
console.table(data2);
