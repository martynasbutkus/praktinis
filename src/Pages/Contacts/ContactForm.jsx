import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3001/contacts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Form submitted successfully!');
            setFormData({
              name: '',
              email: '',
              phoneNumber: '',
              message: '',
            });
          } else {
            console.error('Failed to submit form.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
            Vardas
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </label>
        <label>
            El.Paštas
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </label>
        <label>
            Telefonas
            <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            />
        </label>
        <label>
            Žinutė
            <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            />
        </label>
        <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default ContactForm;
