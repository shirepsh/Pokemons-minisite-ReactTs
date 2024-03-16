import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/aboutPokemons">World of Pokemons</Link></li>
        <li style={{ backgroundColor: 'green', float: 'right' }}>
          <Link to="/home">Our Pokemons</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
