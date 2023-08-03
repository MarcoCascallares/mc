let clientes = [{ nombre:"Pepe" , apellido:"Lopez" , edad:30},

                { nombre:"Laura" , apellido:"Rojas" , edad:25},

                { nombre:"Marcos" , apellido:"Perez", edad:18},];




let clientes_json = JSON.stringify(clientes);



console.log(clientes);

console.log(clientes_json);




localStorage.setItem("clientes" , clientes_json);




// RECUPERANDO LOS DATOS //




let recuperando_clientes = localStorage.getItem("clientes");



console.log(recuperando_clientes);




// PARSE //



recuperando_clientes = JSON.parse( recuperando_clientes );

console.log(recuperando_clientes);
