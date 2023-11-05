import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WarehouseList from './components/WarehouseList';
import WarehouseDetail from './components/WarehouseDetail';
import Navbar from './components/Navbar';
import Home from './components/Home';


import Footer from './components/Footer';
import './App.css';

function App() {
 
  return (
    <Router>
         
          
      <Navbar />
    
      <Routes>
       <Route path="/home" element={<Home />}/>
        <Route path="/warehouse/:id" element={<WarehouseDetail />} />
        <Route path="/warehouses" element={<WarehouseList />}/>
      </Routes>
      <Footer />
      {/* </div> */}
    </Router>
   
  );
}

export default App;


