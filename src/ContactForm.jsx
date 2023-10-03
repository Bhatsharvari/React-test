import React, { useState } from 'react';

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: 'Select State', 
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Data:', formData);
  };

 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>State:</label>
        <select name="state" value={formData.state} onChange={handleInputChange}>
          <option value="Select State">Select State</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Delhi">Delhi</option>
          <option value="Punjab">Punjab</option>
         
        </select>
      </div>
      <button type="Update">Update</button>
    </form>
  );
};

export default ContactForm;