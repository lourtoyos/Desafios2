let nombreProduto = "Computadora"
let precioUnitario = 1500 
let cantidadDeseada = prompt(`Ingrese la cantidad de ${nombreProduto}($${precioUnitario} C/U) que quiera comprar: `)

let costoTotalSinDescuento = cantidadDeseada * precioUnitario

if(cantidadDeseada >= 5) {
    costoConDescuento = costoTotalSinDescuento * 0.9
    // Otra forma = costoTotalSinDescuento *= 0.9 (le doy un valor nuevo a la variable)
}

if(cantidadDeseada >=5)
{
    alert("Su compra da un total de $ " + costoConDescuento + ". Se le aplico un descuento del 10%" 

    )
}
else{
    alert("Su compra da un total de $ " + costoTotalSinDescuento )
}
    