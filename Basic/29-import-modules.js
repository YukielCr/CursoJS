// Importacion de modulos
import { add,PI,name,Circle} from './28-export-modules.js';
import subtract from './28-export-modules.js';

// funciones
console.log(add(5, 7))
console.log(PI)
console.log(name)

// exportacion por defecto
console.log(subtract(10, 4))

let Circle1 = new Circle(5);
console.log(Circle1.area().toFixed(2));

