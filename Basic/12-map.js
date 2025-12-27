// Map

// Declaration
let myMap=new Map();
console.log(myMap);

// Initialization
// This is same as the diccionaries in Python
myMap=new Map([
    ["name", "Yukiel"],
    ["age", 21],
    ["email", "yuki@gmail.com"]
])

// Metodos y propiedades
// Set 
myMap.set("alias", "yuki");
myMap.set("name", "Kevin Yukiel");
console.log(myMap);

// Get
console.log(myMap.get("name"));
console.log(myMap.get("surname"));

// has 
console.log(myMap.has("name"));
console.log(myMap.has("surname"));

// delete 
myMap.delete("email");
console.log(myMap);

// clear
//myMap.clear();
console.log(myMap);

console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.size);
console.log(myMap.entries());