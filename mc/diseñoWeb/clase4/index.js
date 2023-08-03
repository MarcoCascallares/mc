class Producto{
    constructor(nombre, precio, detalle, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }

    sumarIva(){
        return this.precio = 1.21;
    }

    Vender(){
        this.disponible = false;
    }

    precioSugerido(){
        return this.precio * 1.21 * 1.25;
    }    
}

const formulario = document.getElementById('formulario');
const listaProductos = document.getElementById('lista-productos');
const productos = [];

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;
  const detalle = document.getElementById('detalle').value;
  const cantidad = document.getElementById('cantidad').value;

  const producto = new Producto(nombre, precio, detalle, cantidad);
  productos.push(producto);

  formulario.reset();

  // Actualizar la lista de productos
  mostrarProductos();
});

function mostrarProductos() {
    // Limpiar la tabla de productos
    listaProductos.innerHTML = '';
  
    // Crear encabezados de tabla
    const encabezados = ['Nombre', 'Cantidad', 'Precio', 'Detalle'];
    const thead = document.createElement('thead');
    const encabezadosRow = document.createElement('tr');
  
    encabezados.forEach(encabezado => {
      const th = document.createElement('th');
      th.textContent = encabezado;
      encabezadosRow.appendChild(th);
    });
  
    thead.appendChild(encabezadosRow);
    listaProductos.appendChild(thead);
  
    // Mostrar cada producto en la tabla
    const tbody = document.createElement('tbody');
  
    productos.forEach(producto => {
      const fila = document.createElement('tr');
  
      ['nombre', 'cantidad', 'precio', 'detalle'].forEach(propiedad => {
        const celda = document.createElement('td');
        celda.textContent = producto[propiedad];
        fila.appendChild(celda);
      });
  
      tbody.appendChild(fila);
    });
  
    listaProductos.appendChild(tbody);
  }
