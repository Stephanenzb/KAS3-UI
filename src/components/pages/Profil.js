import React from "react";
import Footer from "../Footer";
import './Profil.css'
import { LoginButton } from "../LoginButton";
import { Button } from "../Button";
import Dictaphone from "../Dictaphone";
import MicRecorderFile from "../MicRecorderFile";
import "../HeroSection.css"


const Profil = () =>{
  return (
    <div>
      <div className="hero-container">
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Test les deux transcriptions</h1>
      <p>Click sur un des deux modes</p>
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
          </div>
    </div>
      <Footer/>

    </div>
    
    
  );
}


/*
this is the speech to text to convert in here 
<textarea
                type="textarea"
                className="form-control-profile"
                id="transcription"
                placeholder="appuies sur le petit micro !"
              />
              <i class="fa fa-microphone microphone-ico"></i>
*/

/*const Profil = () =>{
    return(
    <div>
    <div className="profil-container">
       <video src='/videos/video-1.mp4' autoPlay loop muted /> 
       <h1 style={{color: "white", fontSize: "60px"}}>Coucou toi !</h1>
       <form className="form-group-profile" >
          <div className="transcript-area">
            <textarea
              type="textarea"
              className="form-control"
              id="transcription"
              placeholder="appuies sur le petit micro !"
            />
            <i class="fa fa-microphone microphone-ico"></i>
          </div>
          <LoginButton className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--meduim'
          type='submit'
          >Ajouter a la bibliothèque</LoginButton>  
        </form>  
    </div>
    </div>    
    
    
    );
    
}*/

export default Profil;