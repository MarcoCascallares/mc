class Pedido {
    constructor(cliente, direccion, hamburguesas, entregado) {
        this.cliente = cliente;
        this.direccion = direccion;
        this.hamburguesas = hamburguesas;
        this.entregado = entregado;
    }
}

let pedidos = [];

function guardarPedidos() {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

function cargarPedidos() {
    const pedidosString = localStorage.getItem('pedidos');
    if (pedidosString) {
        pedidos = JSON.parse(pedidosString);
    }
}

function renderizarPedidos() {
    const lista = document.getElementById('pedidos-list');
    lista.innerHTML = '';
    pedidos.forEach((pedido, index) => {
        const li = document.createElement('li');
        li.textContent = `${pedido.cliente} - ${pedido.direccion} - ${pedido.hamburguesas.length} hamburguesas`;
        if (pedido.entregado) {
            li.textContent += ' (Entregado)';
        }
        lista.appendChild(li);
    });
}

function init() {
    cargarPedidos();
    renderizarPedidos();

    const formulario = document.getElementById('pedido-form');
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        const cliente = document.getElementById('cliente').value;
        const direccion = document.getElementById('direccion').value;
        const seleccionadas = Array.from(document.getElementById('hamburguesas').selectedOptions)
            .map(option => option.value);
        
        const nuevoPedido = new Pedido(cliente, direccion, seleccionadas, false);
        pedidos.push(nuevoPedido);
        guardarPedidos();
        renderizarPedidos();

        formulario.reset();
    });

    const limpiarRegistrosBtn = document.getElementById('limpiar-registros');
    limpiarRegistrosBtn.addEventListener('click', () => {
        pedidos = [];
        localStorage.removeItem('pedidos');
        renderizarPedidos();
    });
}

init();
