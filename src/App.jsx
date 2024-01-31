// App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navigation from './Pages/Navigation/Navigation';
import Footer from './Pages/Main/Footer';
import Main from './Pages/Main/Main';
import Services from './Pages/Services/Services';
import Contacts from './Pages/Contacts/Contacts';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route path="/kontaktai" element={<Contacts />} />
          <Route path="/paslaugos" element={<Services />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
