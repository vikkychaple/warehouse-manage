import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import warehousesData from '../data/warehouse.json';

function WarehouseList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const [filterCluster, setFilterCluster] = useState('');
  const [filterSpace, setFilterSpace] = useState('');

  // Filter and search the warehouses based on user input
  const filteredWarehouses = warehousesData.filter((warehouse) => {
    const matchesSearch = warehouse.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = filterCity === '' || warehouse.city === filterCity;
    const matchesCluster = filterCluster === '' || warehouse.cluster === filterCluster;
    const matchesSpace = filterSpace === '' || warehouse.space_available >= Number(filterSpace);

    return matchesSearch && matchesCity && matchesCluster && matchesSpace;
  });

  return (
    <div className="WarehouseList">
      <h1>Warehouse List</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filterCity} onChange={(e) => setFilterCity(e.target.value)}>
          <option value="">Filter by City</option>
         
          {Array.from(new Set(warehousesData.map((warehouse) => warehouse.city))).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select value={filterCluster} onChange={(e) => setFilterCluster(e.target.value)}>
          <option value="">Filter by Cluster</option>
         
          {Array.from(new Set(warehousesData.map((warehouse) => warehouse.cluster))).map((cluster) => (
            <option key={cluster} value={cluster}>
              {cluster}
            </option>
          ))}
        </select>
        
        <input
          type="number"
          placeholder="Minimum Space Available"
          value={filterSpace}
          onChange={(e) => setFilterSpace(e.target.value)}
        />
      </div>
      <ul>
        {filteredWarehouses.map((warehouse) => (
          <li key={warehouse.id}>
            <Link to={`/warehouse/${warehouse.id}`}>{warehouse.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WarehouseList;
