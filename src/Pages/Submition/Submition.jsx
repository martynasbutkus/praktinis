import React, { useState, useEffect } from 'react';
import { IoTrashBin } from 'react-icons/io5';
import { MdNotificationImportant } from 'react-icons/md';
import '../../scss/Submition.scss';

const Submition = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/contacts');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRemoveContact = async (id) => {
    try {
      await fetch(`http://localhost:3001/contacts/${id}`, { method: 'DELETE' });
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(updatedContacts);
    } catch (error) {
      console.error('Error removing contact:', error);
    }
  };

  const handleToggleImportant = async (id, isImportant) => {
    try {
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === id ? { ...contact, important: isImportant } : contact
        )
      );
      await fetch(`http://localhost:3001/contacts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ important: isImportant }),
      });
    } catch (error) {
      console.error('Error toggling importance:', error);
    }
  }
  const sortContacts = (a, b) => {
    if (a.important && !b.important) {
      return -1;
    } else if (!a.important && b.important) {
      return 1;
    } else {
      return 0;
    }
  };

  const sortedContacts = [...contacts].sort(sortContacts);

  return (
    <div className="borders">
      <h2>Klientų žinutės</h2>
      <div className="submition">
        {sortedContacts.map((contact) => (
          <div className={`submition-block ${contact.important ? 'important' : ''}`} key={contact.id}>
            <div className="submition-buttons">
              <button onClick={() => handleRemoveContact(contact.id)}>
                <IoTrashBin />
              </button>
              <button
                onClick={() => handleToggleImportant(contact.id, !contact.important)}
                className={contact.important ? 'important-button' : ''}
              >
                <MdNotificationImportant />
              </button>
            </div>
            <p><b>Vardas:</b> {contact.name}</p>
            <p><b>El.Paštas:</b> {contact.email}</p>
            <p><b>Tel. Numeris:</b> {contact.phone || contact.phoneNumber}</p>
            <p><b>Žinutė:</b> {contact.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Submition;
