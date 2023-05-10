import { useState } from "react";

export const Task = (props) => {
    const {id, descripcion, completado, onEliminar, onEditar, onCompletar} = props;
    
    const [modoEdicion, setModoEdicion] = useState (false);
    const [nuevaDescripcion, setNuevaDescripcion] = useState(descripcion);
    const [estaCompletado, setEstaCompletado] = useState(completado);

    const handleEliminar = () => {
        console.log("1")
        onEliminar(id);
    };

    const handleEditar = () => {
        if (modoEdicion) {
            onEditar(id, nuevaDescripcion);
            setModoEdicion(false);
        }   else {
            setModoEdicion(true);
        }
    };

    const handlechange = (evento) => {
        setNuevaDescripcion (evento.target.value);
    };

    const handleCompletado = () => {
        setEstaCompletado(!estaCompletado);
         onCompletar(id, estaCompletado);
        
    };

    
    return (
        <li>
        <input id={id} type="checkbox" checked={estaCompletado} onChange={handleCompletado}/>
      {modoEdicion ? ( 
        <input
         type="text"
         value={nuevaDescripcion}
         onChange={handlechange}
        />

      ) : (
        <label htmlFor={id}>{descripcion}</label>
      )}
      <br />
      <button onClick={handleEditar}>{modoEdicion ? "Guardar" : "Editar"}</button>
      <button onClick={()=>handleEliminar()}>Eliminar</button>
        </li>
    );
};