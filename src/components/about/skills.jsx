import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import './skills.css';

// Import Logo Assets
import phpLogo from '../../assets/php.png';
import laravelLogo from '../../assets/laravel.png';
import bootstrapLogo from '../../assets/bootstrap.png';
import javaLogo from '../../assets/java.png';
import reactLogo from '../../assets/react.png';
import pythonLogo from '../../assets/python.png';
import figmaLogo from '../../assets/figma.png';
import canvaLogo from '../../assets/canva.png';

const skills = [
  { name: 'PHP', logo: phpLogo },
  { name: 'Laravel', logo: laravelLogo },
  { name: 'Bootstrap', logo: bootstrapLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'Figma', logo: figmaLogo },
  { name: 'Canva', logo: canvaLogo },
];

const SkillSection = () => {
  return (
    <div className="skills container" id="skills">
      <header class="section-header">
          <h6 className='section-title'>My Skills</h6>
      </header>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="skill-slider"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="skill-slide">
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default SkillSection;
