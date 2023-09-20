// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"

const numeroRandom = Math.round(Math.random()*10+1);
console.log(numeroRandom)
const elegirNumero = prompt("introduzca un numero del 1 al 10")
const numeroElegido = parseInt(elegirNumero)
console.log(numeroElegido)
if(numeroElegido >= 1 && numeroElegido <= 10) {
    if(numeroElegido === numeroRandom) {
        alert("Ganaste")
    }else{
        alert("Perdiste. vuelve a intentarlo")
    }
} else {
    alert("Perdiste. vuelve a intentarlo")
}