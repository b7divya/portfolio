import React from 'react';
import './Hero.css';
import Typewriter from './Typewriter'

const Hero = () => {
  const text = 'Design: Product, Interfaces, Systems, Strategy, UX, and More.';

  return (
    <div className='hero'>
      <div className='hero-container'>
        <Typewriter text={text} speed={100} />
      </div>
    </div>
  ); 
};

export default Hero;