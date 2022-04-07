import React from 'react';
import './App.css';
import About from './Components/About/About';
import AllInOne from './Components/AllInOne/AllInOne';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';
import Support from './Components/Support/Support';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Support></Support>
      <AllInOne></AllInOne>
      <Pricing></Pricing>
    </>
  );
}

export default App;
