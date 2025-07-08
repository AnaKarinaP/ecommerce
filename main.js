// Productos disponibles
const productos = ["Camiseta", "Pantalón", "Zapatillas"];
const precios = [20, 40, 60];

// Carrito vacío
let carrito = [];

// Mostrar productos
let mensaje = "Elige un producto (1, 2 o 3):\n";
for (let i = 0; i < productos.length; i++) {
  mensaje += (i + 1) + ". " + productos[i] + " - $" + precios[i] + "\n";
}

// Pedir al usuario que elija
let opcion = prompt(mensaje);
let productoElegido;

switch (opcion) {
  case "1":
    productoElegido = productos[0];
    carrito.push(precios[0]);
    break;
  case "2":
    productoElegido = productos[1];
    carrito.push(precios[1]);
    break;
  case "3":
    productoElegido = productos[2];
    carrito.push(precios[2]);
    break;
  default:
    alert("Opción no válida");
}

// Mostrar resultado final si eligió bien
if (productoElegido) {
  alert("Agregaste " + productoElegido + " al carrito.\nTotal a pagar: $" + carrito[0]);
}
