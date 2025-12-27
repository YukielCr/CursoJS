// Set

// Declaration
let mySet = new Set();
console.log(mySet);

// Initialization
mySet= new Set(["Elemento1","Elemento2","Elemento3",37,true,"yuki@gmail.com"]);

console.log(mySet);

// Metodos comunes

// add y delete
mySet.add("Elemento4");
console.log(mySet);

mySet.delete("Elemento4");
console.log(mySet);

console.log(mySet);

// has
console.log(mySet.has("Elemento2")); // true
console.log(mySet.has("Elemento5")); // false

// longitud
console.log(mySet.size);

// Convertir un Set a Array
let myarray=Array.from(mySet);
console.log(myarray)

// Convertir un Array a Set
mySet=new Set(myarray);
console.log(mySet)

// No admte duplicados
mySet.add("Elemento1") // No se agrega porque ya existe
mySet.add("ElemenTo1") 
console.log(mySet)

