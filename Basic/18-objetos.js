// Objetos

// Sintaxis

let person={
    name: "Yukiel",
    age: 37,
    alias: "Yuki"
}

// Acceso a las propiedades
console.log(person.name)

// Notacion de corchetes
console.log(person["name"])

//Modification de Propedades
person.name="Kevin"
console.log(person.name)

console.log(typeof person.age)
person.age="27"
console.log(person.age)
console.log(typeof person.age)

// Eliminacion de propiedades
delete person.age
console.log(person)

// Nuevas Propiedades
person.email="yuki@gmail.com"
console.log(person)
person["age"]=21
console.log(person)

// Metodos (Funciones)
let person2={
    name: "Yukiel",
    age: 37,
    alias: "Yuki",

    wakl: function(){
        console.log("La persona camina")
    }
}

person2.wakl()


// Anidacion de Objects
let person3={
    name: "Yukiel",
    age: 37,
    alias: "Yuki",

    wakl: function(){
        console.log("La persona camina")
    },
    job:{
        name: "Programador",
        exp: 15,
        work: function(){
            console.log("La persona trabaja")
        }
    }
}

console.log(person3)
person3.job.work()


console.log("")
let person4={
    name: "Kevin",
    alias: "Yuki",
    email: "yuki@gmail.com",
    age: 37
    
}

console.log(person)
console.log(person4)

console.log(person==person4)
console.log(person===person4)

console.log(person.name===person4.name)

// Iteracion
for (let key in person4){
    console.log(key+" : "+person4[key])
}

// Funciones como Objetos

function Person(name, age){  // Esto deberia de ser una clase 
    this.name=name
    this.age=age
}

let person5=new Person("Yukiel",25)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)