import React from 'react'
import"./about.css";
import About from "../../assets/me.png";
import Skills from "./skills";
const about = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section_title'>About Me</h2>
      <div className='about_container grid'>
        <img src={About} alt='about' className='about_img' />
        <div className='about_data grid'>
          <div className='about_info'>
            <p className='about_description'>I am a 6th semester student at Universitas Muhammadiyah Surakarta, majoring in Informatics Engineering. During my studies, I actively developed skills in software engineering, data analysis, and web development.
I have a strong foundation in front-end technologies such as HTML, CSS, JavaScript, and Bootstrap, as well as back-end using MySQL, PHP, and Laravel. With this combination, I am able to build functional, responsive, and user-friendly web solutions.
I am interested in joining an innovative and collaborative team, where I can contribute optimally while continuing to learn to develop my abilities.
            </p>
            <a href='https://drive.google.com/file/d/13AGjItsmIDyOsnyfIMqyaLqqY-QtVwQj/view?usp=sharing' target="_blank" className='btn'>Dwonload CV</a>
          </div>
        </div>
      </div>
      <Skills/>
     
    </section>
  )
}

export default about