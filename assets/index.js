let nombre = "Lourdes" //es una variable modificable

const apellido = "Toyos" //es una variable constante, aunque le de otro valor no cambia 

let nombres = prompt ("Ingrese su nombre:")

console.log(nombre,apellido)
console.log("Hola " + nombres)
alert("Hola " + nombres)

//`` baflip (backsticks)





//console.log(`${nombre} ${apellido} \n Tu nombre es: ${nombres} `) lo mismo que hice antes pero más corto  

// let edad = 19;
// let residencia = "CABA"
// if (edad >= 18 && residencia == "CABA") {console.log("Solicitud APROBADA");
// }else{
//console.log("Solicitud DENEGADA");
//}

//let esMayor = true;
//let tieneAuto = false;
//if (esMayor || tieneAuto){   Las dos barras es para el OR (solo es necesario que se cumpla una condición)
//    console.log("Jessica puede comprar");
//}else{
//    console.log("Jessica puede comprar");
//}

//el N0T es lo contrario, si da V es F y si da F es V. Se usa el ! 
// ej: !(5>4) 5 NO es mayor que 4. FALSO 
// !(5<4) 5 NO es menor que 4. VERDADERO 

Swal.fire("SweetAlert2 is working!");