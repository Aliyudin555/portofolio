import React, { useState } from 'react';
import "./project.css";
import Menu from './Menu';

const Project = () => {
  const [items, setItems] = useState(Menu);

  const FilterItem = (categoryItem) => {
    const updatedItems = categoryItem === 'All'
      ? Menu
      : Menu.filter((curElem) => curElem.category === categoryItem);
    setItems(updatedItems);
  };

  return (
    <section className='work container section' id='project'>
      <h2 className='section_title'>My Projects</h2>

      <div className='work_filters'>
        <span className='work_item' onClick={() => FilterItem('All')}>All</span>
        <span className='work_item' onClick={() => FilterItem('Game')}>Game</span>
        <span className='work_item' onClick={() => FilterItem('Web')}>Web</span>
        <span className='work_item' onClick={() => FilterItem('Design')}>Design</span>
      </div>

      <div className='work_container grid'>
        {items.map(({ id, image, title, category, link, github }) => (
          <div className='work_card' key={id}>
            <div className='work_thumbnail'>
              <img src={image} alt={title} className='work_img' />
              <div className='work_mask'></div>
            </div>
              <span className='work_category'>{category}</span>
              <h3 className='work_title'>{title}</h3>
              <a href={link} className='work_button' target='_blank' rel='noopener noreferrer'>
                <i className='icon-link work_button-icon'></i> 
              </a>
              <a href={github} className='work_button2' target='_blank' rel='noopener noreferrer'>
                <i className="icon-link fa-brands fa-github"></i>
              </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
