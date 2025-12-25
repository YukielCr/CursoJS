// if, else if, else

// if (si)

let age = 37

if (age == 37) {
    console.log("La edad es 37")
}

// else (si no)

if (age == 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}

// else if (si no, si)

if (age == 37) {
    console.log("La edad es 37")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37 ni es menor de edad")
}


// Nota esta casi nunca la he utilizado en el codigo del dia al dia 
// Operador ternario
const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

// switch
let day =60
let dayName = ""

switch(day){
    case 0:
        dayName = "Domingo"
        break
    case 1:
        dayName = "Lunes"   
        break
    case 2:
        dayName = "Martes"  
        break
    case 3:
        dayName = "Miercoles"   
        break
    case 4:
        dayName = "Jueves"  
        break
    case 5:
        dayName = "Viernes"
        break
    case 6:
        dayName = "Sabado"
        break
    default:
        dayName = "Dia no valido"
}
console.log(`El dia de la semana es: ${dayName}`)