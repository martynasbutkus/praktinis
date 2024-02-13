import React from 'react'
import '../../scss/Main.scss'
import { IoDocumentText } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import ImageSlideshow from './Images';

const Main = () => {
    const navigate = useNavigate();

    const handleServicesClick = () => {
      navigate('/Paslaugos');
    };
    const handleDocumentClick = () => {
        navigate('/VeiklosAtaskaita');
      };
    const handleDocumentClick1 = () => {
        navigate('/Aiskinamasisrastas');
    };
    const handleDocumentClick2 = () => {
        navigate('/Finansineataskaita');
    };

  return (
    <>
    <main>
        <div className='img animation'></div>
        <div className='text animation2'>
            <h1>Jūsų pavadinimas</h1>
            <p>Jūsų pavadinimas – socialinės globos namai Kaišiadorių rajone. Teikiame ilgalaikes ir trumpalaikes senyvo amžiaus ir asmenų su negalia socialinės globos paslaugas.</p>
            <button onClick={handleServicesClick}>Paslaugos</button>
        </div>
    </main>
    <div className='info-container'>
        <div className="info">
            <div className='ataskaita'>
                <IoDocumentText className='icon' />
                <h3>Veiklos Ataskaita</h3>
                <button className='button-main' onClick={handleDocumentClick}>Peržiūrėti</button>
            </div>
            <div className='ataskaita'>
                <IoDocumentText className='icon' />
                <h3>Aiškinamasis Raštas</h3>
                <button className='button-main' onClick={handleDocumentClick1}>Peržiūrėti</button>
            </div>
            <div className='ataskaita'>
                <IoDocumentText className='icon' />
                <h3>Finansinės Ataskaitos</h3>
                <button className='button-main' onClick={handleDocumentClick2}>Peržiūrėti</button>
            </div>
        </div>
        <div className="img">
            <h4>Veiklos Informacija</h4>
        </div>
    </div>
    <ImageSlideshow></ImageSlideshow>
    </>
  )
}

export default Main