import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Checkout = () => {
    const { cartItems, total } = useContext(CartContext);

    return (
        <div>
            {/* Listar elementos del carrito y mostrar total */}
            <button>Finalizar Compra</button>
        </div>
    );
};

export default Checkout;
