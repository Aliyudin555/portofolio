import React from 'react'
import"./home.css";
import Me from "../../assets/me.png"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from'./Shapes';
const home = () => {
  return (
    <section className='home container' id="home">
      <div className='intro'>
        <img data-aos="fade-up" src={Me} alt='home' className='home_img'/>
        <h1 data-aos="fade-up" className='home_name'>Muh Aliyudin Darusman </h1>
        <span data-aos="fade-down" className='home_education'>I'm a fullstack developer </span>

        <HeaderSocials/>
        <a data-aos="fade-down" href='https://wa.me/6289652802457' target="_blank" className='btn'>Hire me</a>
      
        <ScrollDown/>
        
      </div>
      <Shapes/>
    </section>
  )
}

export default home