import React, { useState } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { useEffect, UseState, useRef } from "react";
import { render } from "@testing-library/react";
import axios from "axios";


const MicRecorderFile = () =>{
    //enregistrement to MP3 
    const audioPlayer = useRef(null);
    const splitAudioPlayer = useRef(null);
    const [blobURL, setBlobURL] = useState("");
    const [audioFile, setAudioFile] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [MP3Recorder, setMP3Recorder] = useState(new MicRecorder({bitRate : 128}))
    const [uploadURL, setUploadUrl] = useState("");

    useEffect(() =>{
        navigator.getUserMedia({audio: true}, 
            () => {
                console.log("permission granted");
                setIsBlocked(false);
            }, 
            () => {
                console.log("permissiond denied");
                setIsBlocked(true);
            });
    }, [])
    
    //store the uploaded audio into url
    

    const startRecording = () => {
        if (isBlocked){
            console.log("permission denied");
        }else{
            MP3Recorder.start().then(()=>{
                setIsRecording(true);
            }).catch((e) => console.error(e));
        }
        
    }

    const stopRecording = () => {
        MP3Recorder.stop().getMp3().then(
            async ([buffer, blob]) =>{
                console.log(buffer)
                const file = new File(buffer, "audio.mp3", {
                    type : blob.type, 
                    lastModified: Date.now(),
                })
                const newBlobUrl =  URL.createObjectURL(blob);
                setBlobURL(newBlobUrl);
                setIsRecording(false);
                setAudioFile(file);
                const newFile = axios.post("http://localhost:8000/split-audio", file).then(
                    response => console.log(response)
                    //send the file to bucket 
                )
                console.log(file);
                console.log(newFile)
            }
        ).catch((e) => console.log(e))
    }

    const split= (audio) => {
        return axios.post ("http://localhost:8000/split-audio",
        audio).then(response => console.log(response));
    }  

    return (
        <div>
            <h1>Transcription</h1>
            <audio ref={audioPlayer} src={blobURL} controls='controls'/>
            <button disabled={isRecording} onClick={startRecording}>Start</button>
            <button disabled={!isRecording} onClick={stopRecording}>Stop</button>
            <p>audio splited</p>
            <button >Submit</button>
        </div>
    )
}

export default MicRecorderFile;