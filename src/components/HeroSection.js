import React, {Link} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>UN CONCEPT HORS PAIRE</h1>
      <p>Venez vite découvrir</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='sign-up'
        >
          CONNEXION
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='register'
        >
          INSCRIPTION
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
