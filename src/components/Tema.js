import React, { useState } from 'react';
import {FaThemeco } from 'react-icons/fa';

function Tema() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div>
   
      <button className="theme-toggle" onClick={toggleTheme}>
      <h6>MudarTema</h6>
        <FaThemeco/>
      </button>
    
    </div>
  );
}

export default Tema;
