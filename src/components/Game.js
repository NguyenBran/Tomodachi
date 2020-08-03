import React, { useState, useEffect, useRef } from 'react';
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

const Game = (props) => {
  let id = sessionStorage.getItem("id");
  const check = props.location.state && props.location.state.visit !== null && props.location.state.visit.id !== id;
  id = check ? props.location.state.visit.id : id;
  const [visitUser, setVisitUser] = useState(check ? true : false);

  const [petGif, setPetGif] = useState('');
  const [user, setUser] = useState(null);
  const [hunger, setHunger] = useState(-1);
  const [happiness, setHappiness] = useState(-1);
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(5);
  const [transform, setTransform] = useState(0);
  const hungerRef = useRef(false);
  const happinessRef = useRef(false);
  let history = useHistory();
  

  const petMapping = {
    "penguin": penguins,
    "pineapple": pineapples,
    "pig": pig,
    "bear": bear
  }

  const petRanAway = async () => {
    const petResponse = await userService.updatePet(id, { petName: '', petType: '', petHunger: 100, petHappiness: 100 });
    history.push('/createPet');
  }

  useEffect(() => {
    const getPetInfo = async (id) => {
      const response = await userService.retrieveInfo(id);
      setUser(response);
    }

    getPetInfo(id);
    if (!visitUser){
      const hungerInterval = setInterval(() => {
        setHunger(hunger => hunger > 0 ? hunger - 1 : 0);
      }, 1000);

      const happinessInterval = setInterval(() => {
        setHappiness(happiness => happiness > 0 ? happiness - 1 : 0);
      }, 1000);

      return () => {
        clearInterval(hungerInterval);
        clearInterval(happinessInterval);
      }
    }

  },[]);

  useEffect(() => {
    if (user) {
      setPetGif(petMapping[user.petType].idle);
      setHunger(user.petHunger);
      setHappiness(user.petHappiness);
    }
  }, [user]);

  useEffect(() => {
    const update = async () => {
      const response = await userService.updatePet(id, { petHunger: hunger });
    }
    if (hunger === 0){
      const runAwayTimer = setTimeout(() => {
        alert("Your pet went to go look for food elsewhere :(");
        petRanAway();
      }, 5000);

      return () => {
        clearTimeout(runAwayTimer);
      }
    }

    if (hungerRef.current) {
      update()
    } else {
      hungerRef.current = true;
    }
  }, [hunger]);

  useEffect(() => {
    const update = async () => {
      const response = await userService.updatePet(id, { petHappiness: happiness });
    }

    if (happiness === 0){
      const runAwayTimer = setTimeout(() => {
        alert("Your pet went to go play somewhere else :(");
        petRanAway();
      }, 5000);

      return () => {
        clearTimeout(runAwayTimer);
      }
    }

    if (happinessRef.current) {
      update()
    } else {
      happinessRef.current = true;
    }
  }, [happiness]);


  useEffect(() => { 
    if (vertical === 14 && verticalShift === 1){
      verticalShift = -1;
    }else if (vertical === 5 && verticalShift === -1){
      verticalShift = 1;
    }
    const verticalInterval = setTimeout(() => {
      setVertical(vertical + verticalShift);
    }, 250);

    return () => {
      clearInterval(verticalInterval);
    }
  }, [vertical]);

  useEffect(() => {
    if (horizontal === 35 && horizontalShift === 1){
      horizontalShift = -1;
      setTransform(0);
    }else if (horizontal === -35 && horizontalShift === -1) {
      horizontalShift = 1;
      setTransform(180);
    }
    const horizontalInterval = setTimeout(() => {
      setHorizontal(horizontal + horizontalShift);
    }, 250);

    return () => {
      clearInterval(horizontalInterval);
    }
  }, [horizontal]);

  const handleLogoutUser = () => {
    sessionStorage.clear();
    history.push('/');
  }
  const handleReturnHome = () => {
    history.push('/', { visit: null });
    setVisitUser(false);
    window.location.reload();
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
            <UserActions 
              setPetGif={setPetGif} 
              user={user} 
              petMapping={petMapping}
              hunger={hunger}
              happiness={happiness}
              setHappiness={setHappiness}
              setHunger={setHunger}  
            />
            <ProgressBar user={user} hunger={hunger} happiness={happiness}/>
          </div>
          <img className='pet-img' style={{ marginTop: `${vertical}%`, marginLeft: `${horizontal}%`, transform: `rotateY(${transform}deg)`}}src={petGif} alt='pet' />
        </>
      }
      <>
        <Button color='orange' className='edit-pet-btn' onClick={() => history.push('/createPet')}>Edit Pet</Button>
        <Button color='yellow' className='visit-friends-btn' onClick={() => history.push('/visitFriends')}>Visit a Friend!</Button>
        <Button color='teal' className='return-home-btn' onClick={handleReturnHome} >Return Back Home!</Button>
        <Button color='youtube' className="logout-btn" onClick={handleLogoutUser}>Log Out</Button>
      </>
    </div>
  );
}
 
export default Game;