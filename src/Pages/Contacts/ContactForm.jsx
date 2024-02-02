import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

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
  
    const response = await fetch('http://localhost:3001/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
      setShowPopup(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
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
            placeholder='Vardas'
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
            placeholder='mano@gmail.com'
            />
        </label>
        <label>
          Telefonas
          <div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="tel.nr"
            />
          </div>
        </label>
        <label>
            Žinutė
            <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Rašyti čia'
            />
        </label>
        <button type="submit">Siųsti</button>
    </form>
        {showPopup && (
          <div className="popup">
            <p>Su jumis susisieksim!</p>
          </div>
      )}
    </>
  );
};

export default ContactForm;
