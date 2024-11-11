let producto = {
    nombre: "Camisetas",
    precio: 400,
    stock: 20
}

 producto.nombre = "Zapatillas"

 producto.categoria = "Calzado"

 delete producto.stock

 console.log(producto.nombre)