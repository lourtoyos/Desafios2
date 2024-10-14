const nombreProducto = "Play 5"
const precioUnitario = 500
let cantidadDeseada; 

cantidadDeseada = prompt("Ingrese la cantidad de " + nombreProducto + "($" + precioUnitario + ") que quiera comprar" )

const costoTotal = precioUnitario * cantidadDeseada;

alert(`Ha comprado ${cantidadDeseada} ${nombreProducto}. El costo total es de: $${costoTotal}  `)

