// Tipos de Datos en Primitivos en JavaScript

// Cadenas de texto (String)
let name="Yukiel"
let alias='Yuki'
let emain="yuki@gmail.com"

// Números (Number)
let age=21 //entero
let height=1.75 //decimal
let weight=70.5

// Booleanos (Boolean)
let isTeacher=true
let isStudent=false

// Undefined
// la variable se a declarado pero no se le ha asignado ningun valor
let UndefinedValues
console.log(UndefinedValues) 

// NUll
// Hay una aucencia de valor
let nullValue=null

// Sybmol
let mySymbol=Symbol("mySymbol")

// BigInt
let myBigInt=BigInt(656465456489797979744565464565468879879789456456546)
let myBigInt2=656465456489797979744565464565468879879789456456546n

// Mostrar los tipos de datos   
console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof isTeacher) //boolean 
console.log(typeof isStudent) //boolean
console.log(typeof UndefinedValues) //undefined
console.log(typeof nullValue) //object (esto es un error en JavaScript)
console.log(typeof mySymbol) //symbol
console.log(typeof myBigInt) //bigint
console.log(typeof myBigInt2) //bigint
