import { useState } from "react";
import { Task } from "./Task";

export const TaskList = (props) => {
    const {pendientes, onEliminar, onEditar, onCompletar} = props;
    
    const handleElinar = (id) => {
        console.log(id)
        onEliminar(id);
    }

    const handleEditar = (id, nuevaDescripcion)=> {
        onEditar(id, nuevaDescripcion);
    }


    return (
        <ul>
            {pendientes.map((tarea) => (
            <Task
                key={tarea.id}
                id={tarea.id}
                descripcion={tarea.descripcion}
                completado={tarea.completado}
                onEliminar={handleElinar}
                onEditar={handleEditar}
                onCompletar={onCompletar}
            />
            ))}
        </ul>
    );
  }