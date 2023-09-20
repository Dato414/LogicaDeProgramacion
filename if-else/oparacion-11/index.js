// El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:
// if(edad < 13) {
//     console.log("Es niño");
// }if(edad < 18 ){
//      console.log("Es adolecente");
// } else{
//      console.log("Es adolecente");
// }
 // Obtener edad
 const pregunta = prompt("diga una edad")
 let edad = parseInt(pregunta)

 if(edad <= 13) {
    console.log("Es niño");
}else if (edad <= 18 ) {
     console.log("Es adolecente");
}