import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Products from "../json/Products.json"

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const {id} = useParams()
  
  useEffect(() =>{
  const promesa = new Promise ((resolve)=>{
    setTimeout(() => {
      resolve(Products.find((i => i.id === parseInt(id))))
    }, 1500);
  })        
  promesa.then((data)=>{
    setItem(data)
  })
  },[id])
  
  return (
    <div className='container'>

<div className='row'>
      <ItemDetail item= {item} />
      </div>

    </div>
  )
}


export default ItemDetailContainer