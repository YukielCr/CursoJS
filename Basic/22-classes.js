// Clases

let person={
    name: "Yukiel",
    age: 37,
    alias: "Yuki",
}

class Person{
    constructor(name,age,alias){
        this.name=name
        this.age=age
        this.alias=alias
    }
}

// Sisntaxis
let person1=new Person("Yukiel",21,"Yuki")
let person2=new Person("Arleth",21,"Bonbon")

// console.log(person1)
// console.log(person2)

// console.log(typeof Person)

// Valores por defecto 
class DefaultPerson{
    constructor(name="Sin nombre",age=0,alias="Sin alias"){
        this.name=name
        this.age=age
        this.alias=alias
    }
}

let person3 = new DefaultPerson("Arlth",21)
// console.log(person3)

// Acceso a propiedades 
// console.log(person3.name)
// console.log(person3.age)
// console.log(person3.alias)

// console.log(person3["alias"])

person3.alias="Bonbon"
// console.log(person3.alias)

class PersonWithMethod{
    constructor(name,age,alias){
        this.name=name
        this.age=age
        this.alias=alias
    }

    walk(){
        console.log(`${this.name} is walking`)
    }
}

let person4=new PersonWithMethod("Yukiel",37,"Yuki")
// person4.walk()


//Propiedades Privadas

class PrivatePerson{

    #bank //Volverlo privado

    constructor(name,age,alias,bank){
    this.name=name
    this.age=age
    this.alias=alias    
    this.#bank=bank
    }

    pay(){
        this.#bank
    }

}

let persona5=new PrivatePerson("yuki",21,"yu","4545asas")

// console.log(persona5.bank) // No popdemos acceder a la propiedad privada
// persona5.bank="4545asas" // No podemos modificar la propiedad privada


// console.log(persona5) // No podemos acceder al metodo que usa la propiedad privada


// Getters y Setters

class GetPerson{
    #name
    #age
    #alias
    #bank

    constructor(name,age,alias,bank){
        this.#name=name
        this.#age=age
        this.#alias=alias
        this.#bank=bank
    }

    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank=newBank
    }

    get bank(){
        return this.#bank
    }
}

let person6=new GetPerson("Yuki",21,"yu","4545asas")
// console.log(person6)
// console.log(person6.name)

person6.bank="9999bbbb"
// console.log(person6.bank)

// Herencia

class Animal{
    constructor(name){
        this.name=name
    }   

    sound(){
        console.log("Emnitiendo sonido")
    }
}

class Dog extends Animal{

    sound(){
        console.log("Guau Guau")
    }

    run(){
        console.log("El perro esta corriendo")
    }
}

class Fish extends Animal{

    constructor(name,size){
        super(name)
        this.size=size
    }
    swind(){
        console.log("El pez esta nadando")
    }
}

// let myDog=new Dog("Firulais")
// console.log(myDog)
// myDog.sound()
// myDog.run()

// console.log("-----")

// let myFish=new Fish("Didi",555)
// console.log(myFish)
// myFish.sound()
// myFish.swind()

//Metodos Estaticos

class MathOperations{
    static sum(a,b){
        return a+b
    }
}

console.log(MathOperations.sum(5,10))

