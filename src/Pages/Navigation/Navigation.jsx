import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../scss/Navigation.scss';

const Navigation = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const linkAnimationClass = 'link-animation';

  return (
    <header>
      <div className='pavadinimas link-animation'>
        <h1>Jūsų pavadinimas</h1>
        <h2>Socialinės globos namai</h2>
      </div>
      <div>
        <Link
          to="/"
          className={`button effect ${activeLink === '/' ? 'active-link' : ''} ${linkAnimationClass}`}
          style={{
            textDecoration: 'none',
            color: activeLink === '/' ? '#ffd103' : '#ecf0ba',
          }}
        >
          Apie Mus
        </Link>
        <Link
          to="/paslaugos"
          className={`button effect ${activeLink === '/paslaugos' ? 'active-link' : ''} ${linkAnimationClass}`}
          style={{
            textDecoration: 'none',
            color: activeLink === '/paslaugos' ? '#ffd103' : '#ecf0ba',
          }}
        >
          Paslaugos
        </Link>
        <Link
          to="/kontaktai"
          className={`button effect ${activeLink === '/kontaktai' ? 'active-link' : ''} ${linkAnimationClass}`}
          style={{
            textDecoration: 'none',
            color: activeLink === '/kontaktai' ? '#ffd103' : '#ecf0ba',
          }}
        >
          Kontaktai
        </Link>
      </div>
    </header>
  );
};

export default Navigation;