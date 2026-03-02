import React from 'react'
import"./about.css";
import About from "../../assets/me.png";
import Skills from "./skills";
const about = () => {
  return (
    <section className='about container section' id='about'>
      <h2 data-aos="zoom-in" className='section_title'>About Me</h2>
      <div className='about_container grid'>
        <img  data-aos="fade-right" src={About} alt='about' className='about_img' />
        <div className='about_data grid'>
          <div data-aos="fade-left" className='about_info'>
            <p className='about_description'>Lulusan S1 Teknik Informatika dari Universitas Muhammadiyah Surakarta (2026) dengan fondasi 
yang kuat dalam rekayasa perangkat lunak, analisis sistem, dan desain UI/UX. Memiliki keahlian 
praktis dalam pengembangan web menggunakan JavaScript, PHP (Laravel), Java, dan MySQL, 
serta manajemen versi dengan Git. Mampu menganalisis data untuk menghasilkan solusi sistem 
yang efisien dan berpusat pada pengguna. Memiliki kemampuan adaptasi yang baik untuk bekerja 
secara mandiri maupun berkolaborasi dalam tim. Sangat antusias untuk memulai karier di bidang 
teknologi informasi dan berkontribusi dalam menciptakan solusi teknologi yang inovatif bagi 
perusahaan.
            </p>
            <a href='https://drive.google.com/file/d/1s3IeGS9omLsNGYdE8jIX49_tzA5MJ06X/view?usp=sharing' target="_blank" className='btn'>Dwonload CV</a>
          </div>
        </div>
      </div>
      <Skills/>
     
    </section>
  )
}

export default about