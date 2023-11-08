var numerosIngresados = [];

function mostrarNumeros() {
    var listaNumeros = document.getElementById("listaNumeros");
    listaNumeros.innerHTML = ""; // Limpiar la lista antes de mostrar los números

    for (var i = 0; i < numerosIngresados.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(numerosIngresados[i]));
        listaNumeros.appendChild(li);
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        mostrarNumeros(); // Mostrar los números al presionar "ESC"
    } else if (!isNaN(event.key) && event.key !== " ") {
        numerosIngresados.push(event.key);
    }
});
