import React, { useState, useEffect } from 'react';
import './App.css';

const ViewInventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('/api/uniforms');
        const data = await response.json();
        setInventory(data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };
    fetchInventory();
  }, []);

  return (
    <div className="inventory-container">
      <h1>Uniform Inventory</h1>
      <ul>
        {inventory.map((item) => (
          <li key={item._id}>
            {item.itemName} - {item.quantity} pcs ({item.size}, {item.location})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewInventory;
