// src/components/CartWidget.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const { itemCount } = useContext(CartContext);

    return (
        <div>
            <span>Carrito</span>
            <span>{itemCount}</span>
        </div>
    );
};

export default CartWidget;
