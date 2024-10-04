const botonesAgregar = document.querySelectorAll('.agregar-carrito');

let carrito = [];

botonesAgregar.forEach((boton, indice) => {
    boton.addEventListener('click', () => {
        const producto = {
            nombre: document.querySelectorAll('h2')[indice].textContent,
            precio: document.querySelectorAll('p')[indice].textContent,
            imagen: document.querySelectorAll('img')[indice].src
        };

        carrito.push(producto);

        mostrarCarrito();
    });
});

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach((producto, indice) => {
        const elemento = document.createElement('li');
        elemento.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.precio}</p>
            <button class="eliminar-producto">Eliminar</button>
        `;
        listaCarrito.appendChild(elemento);

        const botonEliminar = elemento.querySelector('.eliminar-producto');
        botonEliminar.addEventListener('click', () => {
            carrito.splice(indice, 1);
            mostrarCarrito();
        });
    });
}