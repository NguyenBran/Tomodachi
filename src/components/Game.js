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
import { Link } from 'react-router-dom';
import history from '../history';
let horizontalShift = -1;
let verticalShift = 1;
const petMapping = {
  "penguin": penguins,
  "pineapple": pineapples,
  "pig": pig,
  "bear": bear
}

const Game = ({id}) => {
  const [petGif, setPetGif] = useState('');
  const [user, setUser] = useState(null);
  const [hunger, setHunger] = useState(-1);
  const [happiness, setHappiness] = useState(-1);
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(5);
  const [transform, setTransform] = useState(0);
  const hungerRef = useRef(false);
  const happinessRef = useRef(false);

  useEffect(() => {
    const getPetInfo = async () => {
      const response = await userService.retrieveInfo(id);
      setUser(response);
    }
    getPetInfo();
    if (id === sessionStorage.getItem('id')){
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
  },[id]);

  useEffect(() => {
    if (user) {
      setPetGif(petMapping[user.petType].idle);
      setHunger(user.petHunger);
      setHappiness(user.petHappiness);
    }
  }, [user]);

  useEffect(() => {
    const update = async () => {
      await userService.updatePet(id, { petHunger: hunger });
    }
    if (hunger === 0){
      const runAwayTimer = setTimeout(async () => {
        alert("Your pet went to go look for food elsewhere :(");
        await userService.updatePet(id, { petName: '', petType: '', petHunger: 100, petHappiness: 100 });
        history.push('/petQuestionnaire');
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
  }, [hunger, id]);

  useEffect(() => {
    const update = async () => {
      await userService.updatePet(id, { petHappiness: happiness });
    }

    if (happiness === 0){
      const runAwayTimer = setTimeout(async () => {
        alert("Your pet went to go play somewhere else :(");
        await userService.updatePet(id, { petName: '', petType: '', petHunger: 100, petHappiness: 100 });
        history.push('/petQuestionnaire');
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
  }, [happiness, id]);


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
        <Button color='orange' className='edit-pet-btn' onClick={() => history.push('/petQuestionnaire')}>Retake Questionnaire</Button>
        <Button color='yellow' className='visit-friends-btn'>
          <Link to='/visitFriends' style={{color: 'white'}}>
            Visit a Friend!
          </Link>
        </Button>
        <Button color='teal' className='return-home-btn'>
          <Link to="/" style={{color: 'white'}}>
            Return Home
          </Link>
        </Button>
        <Button color='youtube' className="logout-btn" onClick={handleLogoutUser}>
          <Link to="/login" style={{color: 'white'}}>
            Logout
          </Link>
        </Button>
      </>
    </div>
  );
}
 
export default Game;