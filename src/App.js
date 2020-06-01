import React from 'react';
// import logo from './logo.svg';
import './App.scss'
import Header from './components/header'
import ProfilePreview from './components/profile-preview'
import Bill from './components/card/bill';
import Usage from './components/card/usage';

function App() {
  return (
    <div className="">
      <Header />
      <ProfilePreview />
      <div
        style={{
          margin: '0 8%',
          marginTop: '3em',
          alignItems: 'center',
          justifyContent: 'space-between',
          display: 'flex'          
        }}
      >
        <Bill />
        <Usage />
      </div>
    </div>
  );
}

export default App;
