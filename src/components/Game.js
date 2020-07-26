import React, { useState, useEffect, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import animalCrossingMusic from '../music/animal-crossing.mp3';
import UserActions from './UserActions';
import ProgressBar from './ProgressBar';
import userService from '../services/user';
import penguins from '../utils/penguinGifs';
import pineapples from '../utils/pineappleGifs'
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router';

const Game = () => {  
  const id = sessionStorage.getItem("id");
  const [petGif, setPetGif] = useState('');
  const [user, setUser] = useState(null);
  const [hunger, setHunger] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const ref = useRef(false);
  let history = useHistory();

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

    ref.current = true;
    getPetInfo(id);

    const hungerInterval = setInterval(() => {
      setHunger(hunger => hunger - 1);
    }, 2000);

    const happinessInterval = setInterval(() => {
      setHappiness(happiness => happiness - 1);
    }, 4000);

  },[]);

  useEffect(() => {
    const update = async () => {
      const response = await userService.updatePet(id, { petHunger: hunger });
      console.log(response);
    }
    if (ref.current) {
      console.log('Hunger', hunger);
      update()
    }
  }, [hunger]);

  useEffect(() => {
    const update = async () => {
      const response = await userService.updatePet(id, { petHappiness: happiness });
      console.log(response);
    }
    if (ref.current) {
      console.log('Happiness', happiness);
      update()
    }
  }, [happiness]);

  useEffect(() => {
    if (user) {
      setPetGif(petMapping[user.petType].idle);
      setHunger(user.petHunger);
      setHappiness(user.petHappiness);
    }
  }, [user]);

  const logoutUser = (event) => {
    sessionStorage.clear();
    history.push('/');
  }
  
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
            <ProgressBar user={user} hunger={hunger} happiness={happiness}/>
          </div>
          <img className='pet-img' src={petGif} alt='pet' />
        </>
      }
      <Button color='youtube' className="logout-btn" onClick={logoutUser}>Log Out</Button>
    </div>
  );
}
 
export default Game;