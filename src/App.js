import React, { useState } from 'react';

function App() {
  return (
    <div clasName='main-container'>
      <div className='box'>
        <div className='header'>
          Currency Convertor
        </div>
        <div className='colunm-one'>
          <div className='title'> Select Currency</div>
          <div className='drop-down1'>
            <select id="cars" name="cars">
              <option value="volvo">INT</option>
              <option value="saab">USD</option>
              <option value="fiat">EUR</option>
              <option value="audi">DNR</option>
            </select>
            <div className="input1">
              <input 
                type='text' 
                className='search-bar'
                placeholder='Convert from ...'
              />
            </div>
          </div>
      </div>

      <div className='colunm-two'>
        <div className='title'> Select Currency</div>
        <div className='drop-down2'>
            <select id="cars" name="cars">
              <option value="volvo">INT</option>
              <option value="saab">USD</option>
              <option value="fiat">EUR</option>
              <option value="audi">DNR</option>
            </select>
        </div>
        <div className="input2">
              <input 
                type='text' 
                className='search-bar'
                placeholder='Converted intox...'
              />
        </div>
      </div>
      <div className='footer'>
        <footer >
        © Random Shit Productions
        </footer>
      </div>
    </div>
  </div>  
  );
}

export default App;
