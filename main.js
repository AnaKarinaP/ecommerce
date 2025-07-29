const productos = [
  { id: 1, nombre: "Grama Bahiana 1ra", precio: 1500, imagen: "grama1.jpg" },
  { id: 2, nombre: "Grama Mezcla", precio: 1200, imagen: "grama2.jpg" },
  { id: 3, nombre: "Tierra Abonada", precio: 1000, imagen: "tierra.jpg" },
  { id: 4, nombre: "Turba", precio: 800, imagen: "turba.jpg" },
];

const renderProductos = () => {
  const contenedor = document.getElementById("lista-productos");
  if (!contenedor) return;

  productos.forEach(prod => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>Precio: $${prod.precio}</p>
      <button class="btn-agregar" data-id="${prod.id}">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });

  document.querySelectorAll(".btn-agregar").forEach(btn =>
    btn.addEventListener("click", agregarAlCarrito)
  );
};

const agregarAlCarrito = (e) => {
  const id = parseInt(e.target.dataset.id);
  const producto = productos.find(p => p.id === id);
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const mostrarCarrito = () => {
  const lista = document.getElementById("carrito-lista");
  if (!lista) return;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  lista.innerHTML = "";

  carrito.forEach((prod, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${prod.nombre} - $${prod.precio}
      <button data-index="${index}" class="btn-eliminar">Eliminar</button>`;
    lista.appendChild(li);
  });

  document.querySelectorAll(".btn-eliminar").forEach(btn =>
    btn.addEventListener("click", eliminarDelCarrito)
  );
};

const eliminarDelCarrito = (e) => {
  const index = parseInt(e.target.dataset.index);
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
};

const vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  mostrarCarrito();
};

document.addEventListener("DOMContentLoaded", () => {
  renderProductos();
  mostrarCarrito();

  const btnVaciar = document.getElementById("vaciar-carrito");
  if (btnVaciar) btnVaciar.addEventListener("click", vaciarCarrito);
});
