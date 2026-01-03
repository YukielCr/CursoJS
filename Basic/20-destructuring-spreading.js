// Destructuracion 
myArray=[1,2,3,4]

let man={
    name:"Yukiel",
    age:21,
    alias:"Yuki"
}

let myValues=myArray[1]
console.log(myValues)

let myName=man.name
console.log(myName)

// Desestructuracion 

// Sintaxis arrays

let [myValue0, myValue1,myValue2,myValue3,myValue4]=myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores predeterminados 
let [myValue5=0, myValue6=0,myValue7=0,myValue8=0,myValue9=0]=myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)


console.log("")
// Ignorar elementos array
let [myValue10, , ,myValue13]=myArray
console.log(myValue10)
console.log(myValue13)


console.log("")
// Sisntaxis Objetos 
let {name,age,alias}=man
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis de objetos con valores predeterminados 
let {name2,age2,alias2,email="yuki@gmail.com"}=man
console.log(name2)  // No existe 
console.log(age2)   // No existe 
console.log(alias2) // No existe 
console.log(email)  

console.log("")

// Sintaxis objetos con nombres de variables
let {name:name3,age:age3,alias:alias3}=man
console.log(name3)
console.log(age3)
console.log(alias3)


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




console.log("")
let{name:name4, job: {name:name5}}=person3
console.log(name4)
console.log(name5)




// Propagación (...)

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

// Sisntaxis Objects

let person4={...man, email:"yuki@gmial.com"}
console.log(person4)

// Copia de objets

let person5={...man}
console.log(person5)