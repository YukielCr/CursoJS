// Exportacion de modulos

// funciones
export function add(a, b) {
    return a + b;
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.1416;
export const name = "Yuki";

// Exportacion por defecto

export default function subtract(a, b) {
    return a - b;
}

// Classes

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}