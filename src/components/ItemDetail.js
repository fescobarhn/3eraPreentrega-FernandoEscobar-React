import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';

const ItemDetail = ({ item }) => {
    return (
        <div>
            <h2>{item.name}</h2>
            <ItemQuantitySelector />
            <p>{item.description}</p>
            <button>Añadir al Carrito</button>
        </div>
    );
};

export default ItemDetail;