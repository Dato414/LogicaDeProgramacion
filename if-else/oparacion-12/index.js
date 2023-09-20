//Negar las siguientes expresión de forma de mantener la tabla de verdad, crear el programa que muestre el valor de la expresión a medida que se cambia los valores de a y b.

// !a && !b
// !a || !b

const a = true;
const b = false;

if(!a && !b){
    return "no"
} else if(!a || !b) {
    return true
}