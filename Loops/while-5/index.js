//Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.


// Pedir al usuario que ingrese un número
const ingreso = parseInt(prompt("Por favor, ingrese un número:"));

// Validar que la entrada no contenga letras
const verificaEntradaDeNumeros =/^[0-9]+$/
// /: Delimita el inicio de la expresión regular.
// ^: Este símbolo significa "inicio de la línea". Indica que la cadena debe comenzar de esta manera.
// [0-9]: Esto es una clase de caracteres que coincide con cualquier dígito numérico. El rango 0-9 abarca todos los dígitos del 0 al 9.
// +: Este símbolo indica que el dígito (la clase [0-9]) puede aparecer una o más veces. En otras palabras, la cadena debe contener al menos un dígito.
// $: Este símbolo significa "final de la línea". Indica que la cadena debe terminar de esta manera.

if (verificaEntradaDeNumeros.test(ingreso)) {
// .test() es una funcion nativa, lo cual permite ver si es true o false por ejemplo aca esta declarando que la constante verificaEntradaDeNumeros si es true se cumple la condicion 
  // Calcular la suma de los dígitos
  let sum = 0;
  let num = ingreso;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  alert(`La suma de los dígitos de ${ingreso} es ${sum}`);
} else  {
  alert("La entrada no es un número válido.");
}
