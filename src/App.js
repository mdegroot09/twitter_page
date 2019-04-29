import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <button href="#">Home</button>
        <button href="#">Moments</button>
        <button href="#">Notifications</button>
        <button href="#">Messages</button>
        <div className='headerSearch'>
          <button>Tweet</button>
        </div>
      </header>
      <div className="App">
        <div className='sideSection'>
          <div className='profile'></div>
          <div className='trends'></div>
        </div>
        <div className='mainSection'>
          <div className='searchBar'></div>
        </div>
        <div className='sideSection'>
          <div className='follow'></div>
          <div className='about'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
