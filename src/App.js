import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.scss'
import Header from './components/header/header'
import Footer from './components/footer';
import FooterCopyright from './components/footer-copyright';
import Bantuan from './pages/bantuan/bantuan'
import Home from './pages/home/home'

import background from './assets/Background.svg'
import Inbox from './pages/inbox/inbox';

function App() {
  return (
    <div 
      className="body"
      style={{
        backgroundImage: 'url('+background+')'
      }}
    >
      <Header />

      <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/bantuan' component={Bantuan} />
          <Route path='/inbox' component={Inbox} />
      </Switch>

      <Footer />
      <FooterCopyright />
    </div>
  );
}

export default App;
