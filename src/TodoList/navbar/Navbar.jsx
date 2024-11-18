import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/"><h1>Todo List</h1></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/Todo">React</Link> </li>
        <li><Link to="/TodoComponent">React-Redux</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
