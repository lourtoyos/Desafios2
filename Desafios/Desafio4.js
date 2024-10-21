function sumarProductos (precioUnidad, cantidadDeseada) {
    let total = precioUnidad * cantidadDeseada
    return total;
}

let precioUnidad = 60 
let cantidadDeseada = prompt("Ingrese la cantidad de juegos que quiera comprar")
let totalCompra = sumarProductos(precioUnidad,cantidadDeseada)

alert("El total de su compra es de $ " + totalCompra)