import React from "react";
import Footer from "../Footer";
import './Profil.css'
import { Button } from "../Button";
import "../HeroSection.css"
import videoSource from '../../assets/videos/video-1.mp4';


const Profil = () =>{
  return (
    <div>
      <div className="hero-container">
      <video src={videoSource} autoPlay loop muted />
      <h1>Test les transcriptions</h1>
      <p>Click sur un mode</p>
          <div className="hero-btns">    
            <Button className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            type='submit'
            path='/dictaphone'>Transcrire la voix</Button>
            <Button className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            path='/recorder'>
              Transcrire musique
            </Button>
            <Button className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            path='/upload'>
              Transcrire à partir d'un fichier
            </Button>
          </div>
    </div>
      <Footer/>

    </div>
    
    
  );
}


export default Profil;