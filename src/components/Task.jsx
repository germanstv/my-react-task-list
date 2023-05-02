import React from 'react'
import img1 from '../assets/images/eliminar.png'
import img2 from '../assets/images/icono.jpg'
export const Task = (props) => {
  return (
    <div><input type="checkbox" id={props.id} value={props.name} />
        <p>{props.name}</p>
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
    </div>
  )
}
