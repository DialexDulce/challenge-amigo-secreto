// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, escribe un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);

    const li = document.createElement('li');
    li.textContent = nombre;
    li.setAttribute("data-nombre", nombre); // Para identificarlo luego
    document.getElementById('listaAmigos').appendChild(li);

    input.value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Ya no hay más amigos para sortear.");
        return;
    }

    // Elegir uno al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceAleatorio];

    // Eliminarlo del array
    amigos.splice(indiceAleatorio, 1);

    // Eliminarlo de la lista visual
    const listaVisual = document.getElementById('listaAmigos');
    const elementosLista = listaVisual.querySelectorAll('li');

    elementosLista.forEach((li) => {
        if (li.getAttribute("data-nombre") === ganador) {
            li.remove();
        }
    });

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar anteriores

    const liResultado = document.createElement('li');
    liResultado.textContent = `🎉 El amigo seleccionado es: ${ganador}`;
    resultado.appendChild(liResultado);
}
function reiniciarLista() {
    // Vaciar el array
    amigos.length = 0;

    // Limpiar lista visual
    document.getElementById('listaAmigos').innerHTML = '';

    // Limpiar resultado
    document.getElementById('resultado').innerHTML = '';
}
