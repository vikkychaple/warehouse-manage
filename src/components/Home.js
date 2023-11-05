import React from 'react';
import backgroundImage from '../assets/background.jpg';
const Home=()=> {
  const backgroundStyle = {
   backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    minHeight: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'White',
    fontSize: '24px',
  };

  return (
    <div style={backgroundStyle}>
      <div>
        
        <h1>Welcome to our Warehouse App</h1>
        <p>Explore our warehouses and manage your inventory.</p>
      </div>
    </div>
  );
}

export default Home;
