import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { useState, useEffect } from "react";
import '../src/components/Style.css';
const tareasPendientes = [
  {id:1, descripcion:"Pasear al perro", completada:false},
  {id:2, descripcion:"Hacer los panes", completada:false},
  {id:3, descripcion:"Estudiar", completada:false},
]

function App() {

  const [listaTareas, setListaTareas] = useState(
    JSON.parse(localStorage.getItem("listaTareas")) || tareasPendientes
  );
  const [tareaNueva, setNuevaTarea] = useState("");

  useEffect(() => {
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  });

  const agregar = evento => {
    evento.preventDefault();
    if (tareaNueva.trim() !== "") {
      const nuevaTareaConId = {
        id: listaTareas.length + 1,
        descripcion: tareaNueva ,
        completado: false,
      };
      setListaTareas([...listaTareas, nuevaTareaConId]);
      setNuevaTarea("");
    }
  }

  const handlerChange = evento => {
    setNuevaTarea(evento.target.value);
  };

  const eliminarTarea = (id,) => {
    const nuevasTareas = listaTareas.filter(tarea => tarea.id !== id);
    setListaTareas(nuevasTareas);
    console.log("aqui se elimina")
    console.log(nuevasTareas)
    };

    const editarTarea = (id, nuevaDescripcion) => {
      const nuevasTareas = listaTareas.map(tarea => {
        if (tarea.id === id) {
          tarea.descripcion = nuevaDescripcion;
        }
        return tarea;
      });
      setListaTareas(nuevasTareas);
    };

  const onComplete =  (id, bolean) => {
  }

    return (
      <div className="app">
        <div className="header-todoApp">
          <Header/>
          <form className="f1">
            <input className="primerimput"
            type="text"
            maxLength="25"
            value={tareaNueva}
            onChange={handlerChange}
            placeholder="Ingrese aqui su nueva tarea"
            />
            <button className="primerboton" type="submit" onClick={agregar}>
              +
            </button>
          </form>
        </div>
        <div className="tasklist">
        <TaskList
          pendientes={listaTareas}
          onEliminar={eliminarTarea}
          onEditar={editarTarea}
          onCompletar={onComplete}
        />
        </div>
      </div>
    );
  }

  export default App;
