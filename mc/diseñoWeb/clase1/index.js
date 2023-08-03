const productos=[
    { id: 1, nombre: "Camisa roja", precio: 25, talla: "M" },
    { id: 2, nombre: "Pantalón azul", precio: 35, talla: "L" },
    { id: 3, nombre: "Vestido negro", precio: 45, talla: "S" },
    { id: 4, nombre: "Camiseta gris", precio: 55, talla: "XL" },
    { id: 5, nombre: "Zapatos negros", precio: 65, talla: "S" },
    { id: 6, nombre: "Bolsa marrón", precio: 75, talla: "única" },
    { id: 7, nombre: "Camiseta blanca", precio: 15, talla: "M" },
    { id: 8, nombre: "Jeans azules", precio: 45, talla: "M" },
    { id: 9, nombre: "Abrigo gris", precio: 125, talla: "L" },
    { id: 10, nombre: "Botas marrones", precio: 85, talla: "41" },
    { id: 11, nombre: "Zapatos negros", precio: 65, talla: "40" },
    { id: 12, nombre: "Bolsa marrón", precio: 75, talla: "única" },
    { id: 13, nombre: "Camiseta blanca", precio: 15, talla: "M" },
    { id: 14, nombre: "Jeans azules", precio: 45, talla: "M" },
    { id: 15, nombre: "Abrigo gris", precio: 125, talla: "L" },
    { id: 16, nombre: "Botas marrones", precio: 85, talla: "L" }
  ];

const conteinerProducto=document.getElementById('producto');


const tablaProductos = document.getElementById('tablaProductos');

for(let i = 0; i < productos.length; i++) {

    let fila = document.createElement('tr');
    let celdaId = document.createElement('td');
    let celdaNombre = document.createElement('td');
    let celdaPrecio = document.createElement('td');
    let celdaTalle = document.createElement('td');

    celdaId.textContent = productos[i].id;
    celdaNombre.textContent = productos[i].nombre;
    celdaPrecio.textContent = productos[i].precio;
    celdaTalle.textContent = productos[i].talla;

    fila.append(celdaId);
    fila.append(celdaNombre);
    fila.append(celdaPrecio);
    fila.append(celdaTalle);

    tablaProductos.append(fila);    
}
