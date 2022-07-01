import React, {useEffect} from "react";
import SpeechRecognition from "react-speech-recognition/lib/SpeechRecognition";
import { useSpeechRecognition } from "react-speech-recognition";
import { LoginButton } from "./LoginButton";
import "./Dictaphone.css"
import Footer from "./Footer";

const Dictaphone = () =>{
    const commands = [
        {
          command: 'reset',
          callback: () => resetTranscript()
        },
        {
          command: 'clear',
          callback: () => resetTranscript()
        }
      ]
    const {
        transcript, 
        interimTranscript, 
        finalTranscript, 
        resetTranscript, 
        listening,
    } = useSpeechRecognition({commands});

    useEffect(() =>{
        if (finalTranscript !== '' ){
            console.log("got final result:", finalTranscript);
        }
    }, [interimTranscript, finalTranscript]);

    if (!SpeechRecognition.browserSupportsContinuousListening()){
        return null;
    }

    if (!SpeechRecognition.browserSupportsContinuousListening()){
        console.log('browser pas bon ');
    }

    const listenContinuously = () =>{
        SpeechRecognition.startListening({
            continuous : true,
            language : 'en-US',
        });
    };

    return (
        <div>
          <video src='assets/videos/video-1.mp4' autoPlay loop muted />
        <div className="dict-container">
        <span style={{"color" : "white"}} >
          listening:
          {' '}
          {listening ? 'on' : 'off'}
        </span>
        <div className="dict-btns">
          <LoginButton buttonStyle='btn--outline'
          buttonSize='btn--large' type="button" onClick={resetTranscript} >Reset</LoginButton>
          <LoginButton buttonStyle='btn--outline'
          buttonSize='btn--large' type="button" onClick={listenContinuously}>Listen</LoginButton>
          <LoginButton buttonStyle='btn--outline'
          buttonSize='btn--large' type="button" onClick={SpeechRecognition.stopListening}>Stop</LoginButton>
        </div>
        <div>
        <span>
            <textarea style={{"width" : "689px", "height" : "146px"}}
            placeholder={transcript}></textarea>
            </span>
      </div>
      </div>
      <Footer/>
      
        </div>
    )
}

export default Dictaphone;