import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Feature from './components/feature/Feature';
import Menu from './components/menu/Menu';
import Choose from './components/choose/Choose';
import Stats from './components/stats/Stats';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Feature />
      <Menu />
      <Choose />
      <Stats />
    </>
  );
}

export default App;
