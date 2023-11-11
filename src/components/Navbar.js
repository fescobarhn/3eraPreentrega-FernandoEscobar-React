// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav>
      <Link to="/">AudioShop</Link>
      <ul>
        <li><Link to="/category/audifonos">Audifonos</Link></li>
        {/* Agregar más categorías según lo necesario */}
      </ul>
      {/* Aquí podrías agregar el ícono o componente del carrito */}
    </nav>
  );
}

export default Navbar;