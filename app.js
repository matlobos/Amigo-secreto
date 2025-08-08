// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Caja con los nombres para el sorteo:
let nombres = [];

// Función que actualiza la lista con los nombres nuevos:
function actualizarLista() {

    //Llamo al listado:
    let lista = document.getElementById("listaAmigos");

    //Limpio la lista para evitar duplicado:
    lista.innerHTML = ""; 

    //Inserto el nombre al listado con innerHTML y for:
    for (let i = 0; i < nombres.length; i++) {
        lista.innerHTML += `<li>${nombres[i]}</li>`;
    }
}

//Función del botón agregar los nombres:
function agregarAmigo() {

    //Los nombres del text:
    let nombreAmigo = document.getElementById("amigo").value;

    //Alert ante un espacio total en blanco:
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } if (nombres.includes(nombreAmigo)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    // Agregar nombre de los amigos:
    nombres.push(nombreAmigo);

    // Actualizo la lista con todos los nombres:
    actualizarLista();

    // Limpiar para agregar otro amigo:
    document.getElementById("amigo").value = "";
}

//Funciones del boton sortear:

//Es necesario dos o mas nombres para poder sortear:
function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Para sortear, primero agrega dos o mas nombres");
        return;
    }
    //Buscar un indice al azar con random:
    let indiceDelNombreGanador = Math.floor(Math.random() * nombres.length);

    //Paso ese indice a nombre devolviendo el elemento:
    let nombreGanador = nombres[indiceDelNombreGanador];

    //Llamo al listado de ganador:
    let resultado = document.getElementById("resultado");

    // Inserto el nombre del ganador con innerHTML:
    resultado.innerHTML = `<li>${nombreGanador}</li>`;
}


