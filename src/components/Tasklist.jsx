import React from 'react'
import { Task } from './Task'

const tareas = [{name:'hacer los panes', id:1, desription:'Pan artesanal de papa', status:true}, {name:'Limpiar la plancha y freidora', id:2, desription:'donde se asaran las hamburguesas', status:false}]

export const Tasklist = () => {
  return (
    <div>
       {tareas.map((tarea)=>{
            return (<Task key={tarea.id} name={tarea.name} id={tarea.id} description={tarea.description} status={tarea.status} />)
       })}
    </div>
  )
}
