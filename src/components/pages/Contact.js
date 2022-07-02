import React from "react";
import Footer from "../Footer";
import Cards from "../Cards";
import videoSource from '../../assets/videos/video-1.mp4';

const Contact = () =>{
    return(
    <div>
    <div className="contact-container">
       <video src={videoSource} autoPlay loop muted /> 
       <Cards/>
       <Footer/>
    </div>
    </div>    
    
    
    );
    
}

export default Contact;