const useTask ()=>{
    // Crear tareas
    const agregar = (evento) => {
      evento.preventDefault();
      if (tareaNueva.trim() !== "") {
        const nuevaTareaConId = {
          id: listaTareas.length + 1,
          descripcion: tareaNueva,
          completado: false,
        };
        setListaTareas([...listaTareas, nuevaTareaConId]);
        setNuevaTarea("");
      }
    };
}
// Borrar tareas
// Actualizar tareas