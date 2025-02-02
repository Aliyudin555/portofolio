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
            <a href='' className='btn'>Dwonload CV</a>
          </div>
        </div>
      </div>
      <Skills/>
      {/* <div className="services" id="services">
          <div className="container">
              <header className="section-header">
                  <h6 className='section-title'>My Services</h6>
                 
              </header>
              <div class="row">
                  <div class="col-sm-6 col-md-3">
                      <div class="single-service">
                          <div class="service-icon"><i class="fa fa-code"></i></div>
                          <h4>Web Development</h4>
                          <p>Membangun website responsif dan dinamis sesuai kebutuhan Anda.</p>
                      </div>
                  </div>

                  <div className="col-sm-6 col-md-3">
                      <div class="single-service">
                          <div class="service-icon"><i class="fa fa-paint-brush"></i></div>
                          <h4>UI/UX Design</h4>
                          <p>Mendesain antarmuka yang menarik dan ramah pengguna.</p>
                      </div>
                  </div>

                  <div className="col-sm-6 col-md-3">
                      <div className="single-service">
                          <div class="service-icon"><i class="fa fa-chart-line"></i></div>
                          <h4>Data analytics</h4>
                          <p>pengumpulan, pengolahan, dan analisis data untuk pengambilan keputusan</p>
                      </div>
                  </div>

                  <div class="col-sm-6 col-md-3">
                      <div class="single-service">
                          <div class="service-icon"><i class="fa fa-database"></i></div>
                          <h4>Database Admin</h4>
                          <p>Mengelola dan mengoptimalkan database untuk kinerja yang efisien.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div> */}
    </section>
  )
}

export default about