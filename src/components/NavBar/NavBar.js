import React from 'react';
import './NavBar.css';
import logo from "./assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <img src={logo} alt="logo" width={120} />
        <h3>W3D</h3>
        <div className="categories">   
        <Link to= '/'>Todo</Link>
        </div>
      <div className="categories">
       
        
    <NavLink to={`/category/soportes`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Soportes</NavLink>
    </div>
        <div className="categories">
        <NavLink to={`/category/juguetes`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juguetes</NavLink>
        </div>
        <div className="categories">
        <NavLink to={`/category/varios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Varios</NavLink>

      </div>
      
      <CartWidget className="cart-widget" />
    </nav>
  );
};

export default NavBar;
