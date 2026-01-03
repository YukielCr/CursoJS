/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Ex{
    constructor(name,age){
        this.name=name
        this.age=age
    }  
}

// 2. Añade un método a la clase que utilice las propiedades

class Ex2{
    constructor(name,age){
        this.name=name
        this.age=age
    }  

    introduce(){
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`)
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let exercisePerson1=new Ex2("Arleth",21)
console.log(exercisePerson1.name)
console.log(exercisePerson1.age)
exercisePerson1.introduce()

// 4. Añade un método estático a la primera clase
class Ex3{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    static species(){
        return "This is a message from a static method"   
    }
}

// 5. Haz uso del método estático
console.log(Ex3.species())
// 6. Crea una clase que haga uso de herencia

class Animal{
    constructor(name){
        this.name=name
    } 
    speak(){
        console.log(`${this.name} makes a noise.`)
    }  
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks.`)
    }
}

let dog1=new Dog("Luna")
dog1.speak()

// 7. Crea una clase que haga uso de getters y setters
class Person{
    constructor(name,age){
        this._name=name
        this._age=age
    }
    get name(){
        return this._name
    }
    set age(newAge){
        this._age=newAge
    }
    get age(){
        return this._age
    }
}


// 8. Modifica la clase con getters y setters para que use propiedades privadas
class PrivatePerson{
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
    set age(newAge){
        this.#age=newAge
    }
    get age(){
        return this.#age
    }
    get alias(){
        return this.#alias
    }
    get bank(){
        return this.#bank
    }
    set bank(newBank){
        this.#bank=newBank
    }set alias(newAlias){
        this.#alias=newAlias
    }
}

console.log("----- Ejercicios de Clases -----")
// 9. Utiliza los get y set y muestra sus valores
let person4=new PrivatePerson("Carlos",30)
console.log(person4.name)
console.log(person4.age)
person4.age=301
console.log(person4.age)

// 10. Sobrescribe un método de una clase que utilice herencia 
class Cat extends Animal{
    speak(){
        console.log(`${this.name} Esta haciendo el sodido de sinataxis herror.`)
    }   
}

let cat1=new Cat("Misu")
cat1.speak()