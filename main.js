
class Producto{
    constructor(nombre, precio,cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.disponible= true;
    }

sumarIva() {
    return (this.precio * 1.21).toFixed(2);
}
}

function comenzar(){
    continuar=true;

const productos=[];
while(continuar){
    let nombre = prompt('Ingrese el nombre del producto').toUpperCase();
    let precio= Number(prompt('Ingrese el precio de costo del producto en $')); precio= precio.toFixed(2); 

    if (!isNaN(precio) && precio !== "" && precio !== null){
    let cantidad=prompt('Ingrese la cantidad comprada de ese producto');
    productos.push(new Producto(nombre, precio, cantidad));
    productos.forEach((producto) =>{
    alert(`DETALLES:\n Producto ingresado: ${producto.nombre}\n Cantidad en stock: ${producto.cantidad}\n Precio unitario con iva incluido: $${producto.sumarIva()}\n Precio total con iva incluido: $${((producto.sumarIva())*producto.cantidad).toFixed(2)}\n` )
});}else{
    alert("DATOS INVÁLIDOS")
}

let respuesta = prompt('¿Desea ingresar el costo de otro producto? Ingrese SI para continuar o NO para terminar').toLowerCase();
 if (respuesta === 'si') {
        continuar = true;  // Continuar con el proceso
} else {
        continuar = false;  // Detener el proceso
        alert('Un gusto servirlo, hasta la próxima');
}
}
}
comenzar()