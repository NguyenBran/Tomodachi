import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import animalCrossingMusic from '../music/animal-crossing.mp3';
import UserActions from './UserActions';
import ProgressBar from './ProgessBar';
import userService from '../services/user';
import penguins from '../utils/penguinGifs';
import pineapples from '../utils/pineappleGifs'

const Game = () => {  
  const [petGif, setPetGif] = useState('');
  const [user, setUser] = useState(null);

  const petMapping = {
    "penguin": penguins,
    "pineapple": pineapples
  }

  useEffect(() => {
    const getPetInfo = async (id) => {
      const response = await userService.retrieveInfo(id);
      setUser(response);
      console.log(response);
    }
    const id = sessionStorage.getItem("id");
    getPetInfo(id);
    
  },[]);

  useEffect(() => {
    if (user) {
      setPetGif(petMapping[user.petType].idle);
    }
  }, [user]);
  
  return ( 
    <div className='container'>
      <ReactAudioPlayer
        src={animalCrossingMusic}
        autoPlay={true}
        volume={.1}
        loop={true}
      />
      {user && 
        <>
          <div className='background-img' style={{ backgroundImage: `url(${petMapping[user.petType].background})`}}>
            <UserActions setPetGif={setPetGif} user={user} petMapping={petMapping}/>
            <ProgressBar user={user}/>
          </div>
          <img className='pet-img' src={petGif} alt='pet' />
        </>
      }
      <button></button>
    </div>
  );
}
 
export default Game;