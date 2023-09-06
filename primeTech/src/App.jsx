import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      
      <div className='navBar'>
        <p> Anasayfa</p>
        <p>Favoriler</p>
        <p>Sepet</p>
      </div>
      <button onClick={toggleDarkMode}>Gece Modu</button>

      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed at lacus non urna tincidunt aliquam. Donec volutpat,
          metus et dictum scelerisque, dolor justo ultrices odio, ut bibendum
          lectus tellus vel orci. Integer ac massa id quam condimentum cursus
          id nec odio.
        </p>
      </div>
    </div>
  );
}

export default App;
