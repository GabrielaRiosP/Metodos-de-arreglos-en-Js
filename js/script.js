
//**Desafio Metodos de Arreglo */

const tareas = [
    {id: 1, nombre: "Ir al Super", realizado: false},
    {id: 2, nombre: "Entregar Desafio de Js", realizado: false},
    {id: 3, nombre: "Envolver regalos", realizado: false},
    {id: 4, nombre: "Ir a la peluqueria", realizado: false},
    {id: 5, nombre: "Hacer inventario de la bodega", realizado: false},
]

const listaTareas = document.getElementById("tareas");
const tareaInput = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("agregarTarea");
const resumen = document.getElementById("resumen");
const tareasPendientes = [...tareas];

btnAgregar.addEventListener("click", () => {
    const nuevaTarea = tareaInput.value.trim();
    if (!nuevaTarea) {
        alert("Ingresa una nueva tarea");
        return;
    }
    tareasPendientes.push({id: tareasPendientes.length + 1, nombre: nuevaTarea, realizado: false});
    
    tareaInput.value = "";
    actualizarLista();
}
); 


function actualizarLista() {
    let html = "";
for (const tareaPendiente of tareasPendientes) {
    html += `<li>
            <input type="checkbox" ${tareaPendiente.realizado ? "checked" : ""} 
                onclick="toggleRealizado(${tareaPendiente.id})">
            <span class="${tareaPendiente.realizado ? "realizado" : ""}">
                ${tareaPendiente.nombre}
            </span>
            <button onclick="eliminarTarea(${tareaPendiente.id})">Eliminar</button>
        </li>`;
}
listaTareas.innerHTML = html;
actualizarResumen();

}

function actualizarResumen() {
    const total = tareasPendientes.length;
    const realizadas = tareasPendientes.filter((tarea) => tarea.realizado).length;
    const pendientes = total - realizadas;
    resumen.textContent = `Total: ${total}, Realizadas: ${realizadas}, Pendientes: ${pendientes}`;
}

window.toggleRealizado = (id) => {
    const tarea = tareasPendientes.find((tarea) => tarea.id === id);
    if (tarea) {
      tarea.realizado = !tarea.realizado;
      actualizarLista();
    }
  };

  window.eliminarTarea = (id) => {
    const index = tareasPendientes.findIndex((tarea) => tarea.id === id);
    if (index !== -1) {
      tareasPendientes.splice(index, 1);
      actualizarLista();
    }
  };

  actualizarLista();

