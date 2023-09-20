// Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.

const n = parseInt(prompt("ingrese un numero"));
let contador = 1;

while(contador <= n){
    console.log(contador)
    contador += 2
}