alert("Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.")


let entrada = prompt("Ingrese una lista de números separados por espacios:");

let numeros = entrada.split(" ");


let suma = 0;


for (let i = 0; i < numeros.length; i++) {
  let numero = parseFloat(numeros[i]);
  if (!isNaN(numero)) {
    suma += numero;
  }
}

alert(`La suma de los números ingresados es: ${suma}`);



