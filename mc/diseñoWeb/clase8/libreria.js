let boton = document.getElementById('btn');
let boton2 = document.getElementById('btn2');

boton.addEventListener('click', function(){

    Swal.fire({

        title: "POKEMON!!", 
        text: "PIKACHU",
        icon: "info",
        color: "yellow",
        footer: "<a href='#'>Registrarse</a>",
        background: "skyblue",
        timer: "2000",
        timerProgressBar: true,

    });

});

boton2.addEventListener('click', function(){

    Toastify({

        text: "FIRE BALL",
        duration:3000,
        position:"center",
        gravity: "bottom",


    }).showToast()

});