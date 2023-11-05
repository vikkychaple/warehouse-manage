import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo-text">Warehouse</h1>
      </div>
      
        
          <Link to="/home" className="nav-link">Home</Link>
        
        
          <Link to="/warehouses" className="nav-link">Warehouse List</Link>
        
        
    </nav>
  );
}

export default Navbar;
