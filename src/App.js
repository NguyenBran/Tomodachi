import React from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import animalCrossing from './images/background/animalCrossing.jpg';
import animalCrossingMusic from './music/animalCrossing.mp3';
import corgi from './images/pets/corgiSwim.gif';

function App() {

  return (
    <div className='background-img' style={{backgroundImage: `url(${animalCrossing})`}}>
      <ReactAudioPlayer
        src={animalCrossingMusic}
        autoPlay={true}
        volume={.1}
      />
      <img className='pet-img' src={corgi} alt='pet' />
    </div>
  );
}

export default App;
