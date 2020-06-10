import React from 'react';
// import logo from './logo.svg';
import './App.scss'
import Header from './components/header/header'
import ProfilePreview from './components/profile-preview'
import Footer from './components/footer';
import FooterCopyright from './components/footer-copyright';
import Notification from './components/notification';
import Featured from './components/featured/featured';
import Subscribe from './components/subscribe/subscribe';
import UserInfo from './components/user-info/user-info';
import Offer from './components/offer/offer';

import background from './assets/Background.svg'

function App() {
  return (
    <React.Fragment>
    <div 
      className="body"
      style={{
        backgroundImage: 'url('+background+')'
      }}
    >
      <Header />
      <ProfilePreview />
      <UserInfo />
      <Notification />

      <Featured />

      <Offer />
      <Subscribe />

      <Footer />
      <FooterCopyright />
    </div>
    </React.Fragment>
  );
}

export default App;
