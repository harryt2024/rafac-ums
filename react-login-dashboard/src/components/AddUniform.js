import React, { useState } from 'react';
import './App.css';

const NewUniform = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    quantity: '',
    size: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/uniforms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Uniform added successfully');
        setFormData({ itemName: '', quantity: '', size: '', location: '' });
      } else {
        alert('Failed to add uniform');
      }
    } catch (error) {
      console.error('Error adding uniform:', error);
    }
  };

  return (
    <div className="new-uniform-container">
      <h1>Add New Uniform</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={formData.itemName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="size"
          placeholder="Size"
          value={formData.size}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Uniform</button>
      </form>
    </div>
  );
};

export default NewUniform;
