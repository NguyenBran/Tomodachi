import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import animalCrossing from '../images/background/animalCrossing.jpg';
import animalCrossingMusic from '../music/animal-crossing.mp3';
import UserActions from './UserActions';
import penguins from '../utils/penguinGifs';
import ProgressBar from './ProgessBar';
import userService from '../services/user';

const Game = () => {  
  const [petGif, setPetGif] = useState(penguins.happyPenguin);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getPetInfo = async (id) => {
      const response = await userService.retrieveInfo(id);
      setUser(response);
    }
    const id = sessionStorage.getItem("id");
    getPetInfo(id);
    
  },[]);
  
  return ( 
    <div className='container'>
      <ReactAudioPlayer
        src={animalCrossingMusic}
        autoPlay={true}
        volume={.1}
        loop={true}
      />
      <div className='background-img' style={{ backgroundImage: `url(${animalCrossing})`}}>
        <UserActions setPetGif={setPetGif}/>
        {user && <ProgressBar user={user}/>}
      
      </div>
      <img className='pet-img' src={petGif} alt='pet' />

    </div>
  );
}
 
export default Game;