/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/



// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let name="Yukiel"
console.log(`My name is ${name}`);

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user="admin"
let password="1234"
if(user=="admin" && password=="1234"){
  console.log("Welcome admin");
}else{
  console.log("Access denied");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number=5
if(number==0){
  console.log("The number is zero");
}else if(number>0){
  console.log("The number is positive");
}else if(number<0){
  console.log("The number is negative");
}else{
  console.log("Not a valid number");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age=18
if(age>=18){
  console.log("You can vote");
}else{
    console.log("You can't vote")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let personaAge=15
let mensaje;
let status=personaAge>=18 ? mensaje="adulto" : mensaje="menor";
console.log(`Eres ${mensaje}`);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month=11
console.log()
console.log(`Mes seleccionado: ${month}`)
switch(month){
  case 1:
  case 2:   
  case 12:
      console.log("Invierno");
      break;
  case 3:
  case 4:
  case 5:
      console.log("Primavera");
      break;
  case 6:
  case 7:
  case 8:
      console.log("Verano");
      break;
  case 9:
  case 10:
  case 11:
      console.log("Otoño");
      break;
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch
switch(month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
      console.log("31 días");
      break;
  case 4:
  case 6:
  case 9:
  case 11:
      console.log("30 días");
      break;
  case 2:
      console.log("28 días");
      break;
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language="es"
switch(language){
  case "es":
        console.log("Hola");
        break;
    case "en":
        console.log("Hello");
        break;
    case "fr":
        console.log("Bonjour");
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let peopleAge=20
switch(true){
  case (peopleAge<18):
      console.log("Es menor de edad");
      break;
  case (peopleAge>=18):
      console.log("The man is old");
      break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
  console.log("31 días");
}else if(month==4 || month==6 || month==9 || month==11){
  console.log("30 días");
}else if(month==2){
  console.log("28 días");
}