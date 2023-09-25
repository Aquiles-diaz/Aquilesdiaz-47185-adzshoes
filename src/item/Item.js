import React from 'react'
import {Link} from 'react-router-dom';
import "../item/Item.css"


const Item = ({item}) => {
  return (
    <Link to={"/item/" + item.id} className='text-decoration-none'>
      <div className='container'>
        <div className='card border border-success p-1 mb-2 border-opacity-75 shadow p-8 mb-5 bg-dark rounded '>
          <img src= {item.imagen} className='card-img-top' alt={item.nombre}/>
           <div className='card-body text-center bg-dark '>
            <p className='card-text'>{item.nombre}</p>
           </div>
        </div>
      </div>
    </Link>
  )
}

export default Item;