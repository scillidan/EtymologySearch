import React, { useState } from 'react';


const Toolbar = () =>{
   
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return (
        <div className={`toolbar ${isDarkMode ? 'dark-mode' : ''}`}>
          <button onClick={toggleTheme}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
    );
};

export default Toolbar;