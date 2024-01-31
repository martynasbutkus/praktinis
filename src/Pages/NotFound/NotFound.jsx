// NotFound.jsx
import React from 'react';
import { FaCat } from "react-icons/fa";
import '../../scss/Notfound.scss'

const NotFound = () => {
  return (
    <div className='notfound'>
      <h1> <FaCat /> 404 - Puslapis nerastas</h1>
      <p>Atsiprašome, tačiau puslapis kurio ieškote nerastas.</p>
    </div>
  );
};

export default NotFound;
