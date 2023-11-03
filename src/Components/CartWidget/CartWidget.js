import React from 'react'
import "../CartWidget/cart.css"
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContext';

const CartWidget = () => {
    const {totalProducts, cart} = useCartContext();
    return (
        <div>
            <Link to="/cart"></Link> 
            <button type="button" className="rounded position-relative bi-cart4">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProducts() ||cart}</span>
            </button>
        </div>

    )
}

export default CartWidget;