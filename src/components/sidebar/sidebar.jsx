import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../../assets/logoA5.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Menutup sidebar setelah klik (opsional)
    }
  };
  return (
    <div className="container">
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <a href="#home" className="nav_logo">
          <img src={Logo} alt="Logo" />
        </a>
        <nav className='nav'>
          <div className='nav_menu'>
            <ul className='nav_list'>
              <li className='nav_item'>
                <a href='#home' onClick={(e) => handleLinkClick(e, 'home')} className='nav_link'>
                  <i className='icon-home'></i>
                </a>
              </li>
              <li className='nav_item'>
                <a href='#about' onClick={(e) => handleLinkClick(e, 'about')} className='nav_link'>
                <i className='icon-user'></i>
                </a>
              </li>
              <li className='nav_item'>
                <a href='#project' className='nav_link'>
                <i className='icon-briefcase'></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        
        <div className='nav_footer'>
          <span className='copyright'>&copy; 2025</span>
        </div>
      </aside>

    </div>
  );
};

export default Sidebar;
