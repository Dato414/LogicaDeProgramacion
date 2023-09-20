// // Operaciones básicas, Tipos de datos, Prompt y Alert

// Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.

// C = (F -32) / 1,8
// F = ( C x 1.8) + 32


function calcularFahrenheit(c){
    return (c * 1.8) + 32
}

console.log('Por favor ingrese la temperatura que quiera convertir en Fahrenheit')
let ingreso = prompt('ingrese temperatura en celcius')
let number = parseInt(ingreso)

let calcular = calcularFahrenheit(ingreso)

console.log('su conversion de Celsius a Fahrenheit es ' + calcular +  ' grados Fahrenheit')