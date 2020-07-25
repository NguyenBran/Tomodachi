import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import animalCrossing from '../images/background/animalCrossing.jpg';
import animalCrossingMusic from '../music/animal-crossing.mp3';
import corgi from '../images/pets/corgiSwim.gif';

const Game = () => {  
  return ( 
    <div className='container'>
      <ReactAudioPlayer
        src={animalCrossingMusic}
        autoPlay={true}
        volume={.1}
        loop={true}
      />
      <img className='background-img' src={animalCrossing} alt='pet home' />
      <img className='pet-img' src={corgi} alt='pet' />
    </div>
  );
}
 
export default Game;