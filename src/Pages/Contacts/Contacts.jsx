import React from 'react';
import '../../scss/Contacts.scss';
import ContactForm from './ContactForm';

const Contacts = () => {
  return (
    <div className="contact">
      <div className="contact-block link-animation">
        <div className="contact-info">
          <h2 className='contact-style'>Kontaktai</h2>
          <h4>Kaišiadorių raj. , Rumšiškių sen., Vosyliškių k. 1</h4>
          <h4>akacijuziedai20@gmail.com</h4>
          <h4>+370 674 94992</h4>
          <h4>+370 699 11715</h4>
          <h4>www.akacijuziedai.lt</h4>
          <ContactForm />
        </div>

        <div className="contact-map">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12990.312861871565!2d23.888498391603555!3d54.8610578787938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1slt!2slt!4v1706698231155!5m2!1slt!2slt"
          width="600"
          height="450"
          style={{ border: 'none' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
