// Obtener las tareas en el local storage. si no hay tareas entonces aparece un array vacio
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];


//Funcion que guarda las tareas en el local storage
function guardarTareas() {

  localStorage.setItem('tareas', JSON.stringify(tareas))


}

//Funcion que muestra las tareas en el navegador
function mostrarTareas() {

  let listita = document.getElementById('lista-tareas')

  listita.innerHTML = '';


  for (let i = 0; i < tareas.length; i++) {

    let tareaInsertada = tareas[i];

    let lineaTarea = document.createElement('li')

    lineaTarea.innerHTML = `${tareaInsertada.nombre} - ${tareaInsertada.tarea} - ${tareaInsertada.categoria}`;
    listita.appendChild(lineaTarea)

  }

}



//Funcion para agregar una nueva tarea
function agregarTarea() {

  const nombre = document.getElementById('nombre').value;
  const tarea = document.getElementById('tarea').value;
  const categoria = document.getElementById('categoria').value;

  if (nombre && tarea && categoria) {

    let nuevaTarea = new Tarea(nombre, tarea, categoria);
    tareas.push(nuevaTarea);

    guardarTareas();

    mostrarTareas();

    document.getElementById('nombre').value = '';
    document.getElementById('tarea').value = '';
    document.getElementById('categoria').value = '';

  } else {

    alert('Complete todos los datos para continuar')

  }

}

//Evento que ejecuta la funcion para agregar una tarea nueva
document.getElementById('boton-agregar').addEventListener('click', agregarTarea)


//Funcion para limpiar todas las tareas
function limpiarTareas() {

  tareas = [];
  guardarTareas();
  mostrarTareas();

}

//Evento que ejecuta la funcion para limpiar las tareas
document.getElementById('boton-limpiar').addEventListener('click', limpiarTareas);

//Muestra las tareas que hay cuando cargamos la pagina
mostrarTareas()