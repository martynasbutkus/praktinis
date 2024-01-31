import React from 'react'
import { MdMedicalServices } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { MdOutlineElderlyWoman } from "react-icons/md";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { BsClipboard2HeartFill } from "react-icons/bs";
import '../../scss/Services.scss'

const Services = () => {
  return (
    <div className="services">
        <div className='name'>
            Paslaugos
        </div>
        <div className='listing'>
            <div className="block link-animation">
              <MdOutlineElderlyWoman className='icon1'/>
              <h3>Ilgalaikė ir trumpalaikė senyvo amžiaus ir asmenų su negalia socialinė globa</h3>  
            </div>

            <div className="block link-animation">
              <FaSprayCanSparkles className='icon1'/>
              <h3>Buitinės paslaugos</h3>
            </div>

            <div className="block link-animation">
              <FaBath className='icon1'/>
              <h3>Asmens higiena</h3>
            </div>

            <div className="block link-animation">
              <BsClipboard2HeartFill className='icon1'/>
              <h3>Asmens sveikatos priežiūra ir slauga</h3>
            </div>

            <div className="block link-animation">
              <MdMedicalServices className='icon1'/>
              <h3>Asmens sveikatos priežiūra ir slauga</h3>
            </div>    

            <div className="block link-animation">
              <MdOutlineEmojiTransportation className='icon1'/>
              <h3>Ligonių ir neįgaliųjų pervežimo paslaugos spec. transportu Lietuvoje ir Europos sąjungoje</h3>
            </div>
        </div>
    </div>
  )
}

export default Services