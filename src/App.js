import React from 'react';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import './App.css';
const  App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
    </>
  );
}

export default App;
