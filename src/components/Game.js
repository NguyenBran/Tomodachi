import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import animalCrossingMusic from '../music/animal-crossing.mp3';
import UserActions from './UserActions';
import ProgressBar from './ProgressBar';
import userService from '../services/user';
import penguins from '../utils/penguinGifs';
import pineapples from '../utils/pineappleGifs';
import pig from '../utils/pigGifs';
import bear from '../utils/bearGifs';
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router';
let horizontalShift = -1;
let verticalShift = 1;

const Game = () => {  
  const [petGif, setPetGif] = useState('');
  const [user, setUser] = useState(null);
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(5);
  let history = useHistory();
  

  const petMapping = {
    "penguin": penguins,
    "pineapple": pineapples,
    "pig": pig,
    "bear": bear
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

  useEffect(() => { 
    if (vertical == 20 && verticalShift == 1){
      verticalShift = -1;
    }else if (vertical == 5 && verticalShift == -1){
      verticalShift = 1;
    }
    setTimeout(() => {
      setVertical(vertical + verticalShift);
    }, 250);
  }, [vertical]);

  useEffect(() => {
    if (horizontal == 35 && horizontalShift == 1){
      horizontalShift = -1;
    }else if (horizontal == -35 && horizontalShift == -1) {
      horizontalShift = 1;
    }
    setTimeout(() => {
      setHorizontal(horizontal + horizontalShift);
    }, 250);
  }, [horizontal]);

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
            <ProgressBar user={user}/>
          </div>
          <img className='pet-img' style={{ marginTop: `${vertical}%`, marginLeft: `${horizontal}%`}}src={petGif} alt='pet' />
        </>
      }
      <Button color='youtube' className="logout-btn" onClick={logoutUser}>Log Out</Button>
    </div>
  );
}
 
export default Game;