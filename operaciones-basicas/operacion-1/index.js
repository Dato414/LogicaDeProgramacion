// // Operaciones básicas, Tipos de datos, Prompt y Alert

// Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

console.log('Hola ingrese por favor los numeros que desea sumar')
console.log('\n')

function suma(a, b){
    return a + b
}
function pedir(a, b){
    let ingreso = prompt('Ingrese un numero')
    let number = parseInt(ingreso)
    return number
}
let a = pedir()
let b = pedir()

let operacion = suma(a,b)
console.log('su suma es ' + operacion)

