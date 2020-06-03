import React from 'react';
// import logo from './logo.svg';
import './App.scss'
import Header from './components/header'
import ProfilePreview from './components/profile-preview'
import Bill from './components/card/bill';
import Usage from './components/card/usage';
import Footer from './components/footer';
import FooterCopyright from './components/footer-copyright';
import Notification from './components/notification';
import Featured from './components/banner/featured';
import Offer from './components/banner/offer';
import Subscribe from './components/subscribe/subscribe';

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
      <Notification />
      <Featured />
      <Offer />
      <Subscribe />

      <Footer />
      <FooterCopyright />
    </div>
  );
}

export default App;
