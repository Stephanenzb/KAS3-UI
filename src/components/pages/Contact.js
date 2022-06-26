import React from "react";
import Footer from "../Footer";
import Cards from "../Cards";

const Contact = () =>{
    return(
    <div>
    <div className="contact-container">
       <video src='/videos/video-1.mp4' autoPlay loop muted /> 
       <h1 style={{color: "white", fontSize: "60px"}}>Equipe KAS</h1>
       <Cards/>
    </div>
    <Footer/>
    </div>    
    
    
    );
    
}

export default Contact;