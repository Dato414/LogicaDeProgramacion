alert("Realizar la suma de todos los números pares entre n y m donde n y m los ingresa un usuario.")



// Pedir al usuario que ingrese los números N y M
let n = parseInt(prompt("Por favor, ingrese el número N:"));
let m = parseInt(prompt("Por favor, ingrese el número M:"));


if (n > m) {
  alert("El número N debe ser menor o igual que M. Por favor, inténtelo de nuevo.");
} else {
 
  let suma = 0;

  while (n <= m) {
   
    if (n % 2 === 0) {`3`
      suma += n;
    }

    n++; 
  }


  alert(`La suma de los números pares entre ${n} y ${m} es ${suma}`);
}
