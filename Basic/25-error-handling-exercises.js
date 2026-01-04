/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
let a=10
let b= 50
try{
    c=a/b
    console.log(c)
    
}catch{
    console.log("Ha ocurrido un error")
}

// 2. Captura una excepción utilizando try-catch y finally

try{
    c=a/b
    console.log(c)
}catch{
    console.log("Ha ocurrido un error")
}finally{   
    console.log("El bloque try-catch ha finalizado")
}

// 3. Lanza una excepción genérica
try{
    throw new Error("Esto es un error genérico")
}catch(e){
    console.log("Se ha producido un error: ", e.message)
}

// 4. Crea una excepción personalizada
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

// 5. Lanza una excepción personalizada
try{
    throw new CustomError("Esto es un error personalizado")
}catch(e){
    console.log("Se ha producido un error personalizado: ", e.message)
}

// 6. Lanza varias excepciones según una lógica definida
function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}
try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
}catch (error) {
    console.log("Se ha producido un error: ", error.message);
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    console.log(divide(10, 2));
}catch{

}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let miArray=[5,6,"gv",6,4]

for (let i=0; i<miArray.length;i++){
    try{
        if(isNaN(miArray[i])){
            throw new Error("El valor no es un número")
        }
        let num=parseFloat(miArray[i])
        console.log(num)
    }catch(e){  
        console.log("Error al convertir a float: ", e.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new CustomError(`La propiedad ${prop} no existe en el objeto`);
    }
    return true;
}

try {
    const myObj = { name: "John", age: 30 };
    checkProperty(myObj, "name"); // Propiedad existe
    checkProperty(myObj, "address"); // Propiedad no existe
} catch (error) {
    console.log("Se ha producido un error: ", error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
try {
    function unreliableFunction() {
        if (Math.random() < 0.7) {
            throw new Error("Función fallida");
        }
        return "Éxito";
    }
    let attempts = 0;
    const maxAttempts = 10;
    let result;
    while (attempts < maxAttempts) {
        try {
            result = unreliableFunction();  
            console.log(result);
            break;
        } catch (error) {
            attempts++;
            console.log(`Intento ${attempts} fallido: ${error.message}`);   
            if (attempts === maxAttempts) {
                console.log("Se alcanzó el número máximo de intentos");
            }
        }
    }
} catch (error) {
    console.log("Se ha producido un error inesperado: ", error.message);
}