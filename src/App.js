import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className='headerLinks'>
          <button href="#">Home</button>
          <button href="#">Moments</button>
          <button href="#">Notifications</button>
          <button href="#">Messages</button>
        </div>
        <div className='headerSearch'>
          <input classname='searchTwitter' placeholder="Search Twitter" type="text"/>
          <img className='smallPic' src="https://pbs.twimg.com/profile_images/837228010205913088/WM_aElpn_400x400.jpg" alt=""/>
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
