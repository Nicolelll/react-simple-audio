import React, {useState} from "react";
import ReactDOM from "react-dom";
import { PlayingButton, BasicAudio } from "../src";
import musicSrc from './assets/心裡有鬼.mp3'
import imgSrc from './assets/20180402122700_ZeZiK.jpeg'

const Index = () => {
  const [playing, setPlay] = useState(false)
  const togglePlayState = () => setPlay(!playing)

  const [basePlay, setBasePlay] = useState(false)
  const toggleBasePlay = () => setBasePlay(!basePlay)

  return (
    <div>
      <p1>playBtn</p1>
      <PlayingButton 
        src={musicSrc} 
        onClick={togglePlayState} 
        playing={playing} 
        style={{background: `url(${imgSrc}) no-repeat center`, backgroundSize: 'cover'}}
      />
      <p>basic audio</p>
      <BasicAudio 
        src={musicSrc}         
        onClick={toggleBasePlay} 
        playing={basePlay} 
      />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
