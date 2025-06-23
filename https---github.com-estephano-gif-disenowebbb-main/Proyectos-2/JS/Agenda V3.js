function guardarDato() {
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var correo = document.getElementById("correo").value;

    const datos = {
        'movil' : movil,
        'correo' :correo,
    }

    localStorage.setItem(nombre, JSON.stringify(datos));

    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("correo").value = "";

    actualizarDatos();
}

function recuperarDato() {
    var nombre = document.getElementById("nombre").value;

    if (!nombre) {
        alert("Por favor, ingresa un nombre para buscar.");
        return;
    }

    var datos = localStorage.getItem(nombre);

    if (datos) {
        var contacto = JSON.parse(datos);
        document.getElementById("movil").value = contacto.movil || "";
        document.getElementById("correo").value = contacto.correo || "";
    } else {
        alert("Contacto no encontrado.");
    }
}

function eliminarDato() {
    var nombre = document.getElementById("nombre").value;

    if (!nombre) {
        alert("Por favor, ingresa un nombre para eliminar.");
        return;
    }

    if (localStorage.getItem(nombre)) {
        localStorage.removeItem(nombre);
        alert(`Contacto "${nombre}" eliminado con éxito.`);
    } else {
        alert("Contacto no encontrado.");
    }

    actualizarDatos();
}

function eliminarTodo() {
    if (confirm("¿Estás seguro de que deseas eliminar todos los contactos? Esta acción no se puede deshacer.")) {
        localStorage.clear();
        actualizarDatos();
        alert("Todos los contactos han sido eliminados.");
    }
}

function actualizarDatos() {
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li>Sin contactos</li>';
    } else {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var datos = JSON.parse(localStorage.getItem(key));
            registro += `
                <li>
                    <span class="nom">${key}</span>
                    <span class="nom">${datos.movil || "Sin número"}</span>
                    <span class="nom">${datos.correo || "Sin correo"}</span>
                </li>`;
        }
    }
    document.getElementById("contactos").innerHTML = registro;
}
