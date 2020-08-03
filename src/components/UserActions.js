import React, { useEffect, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const UserActions = ({setPetGif, user, petMapping, hunger, happiness, setHunger, setHappiness}) => {
  let feedPet = null;
  let playPet = null;
  let trickPet = null;
  let talkPet = null;

  const [isDisabledButtons, setIsDisabledButtons] = useState([false, false, false, false]);

  useEffect(() => {
    return () => {
      clearTimeout(feedPet);
      clearTimeout(playPet);
      clearTimeout(trickPet);
      clearTimeout(talkPet);
    }
  }, []);

  const checkLocation = () => {
    return window.location.pathname === "/";
  }
    
  const talk_to_pet = (event) => {
    event.preventDefault();
    setPetGif(petMapping[user.petType].talk);
    disableButtons(0);
    talkPet = setTimeout(() => {
      if (checkLocation()){
        setPetGif(petMapping[user.petType].idle);
        enableButtons();
      }
    }, 3000);

  };

  const feed_pet = (event) => {
    event.preventDefault();
    if (hunger < 70) {
      setHunger(hunger + 30);      
    } else {
      setHunger(100);
    }
    setPetGif(petMapping[user.petType].feed);
    disableButtons(1);
    feedPet = setTimeout(() => {
      if (checkLocation()){
        setPetGif(petMapping[user.petType].idle);
        enableButtons();
      }
    }, 3000);
  };
  
  const play_with_pet = (event) => {
    event.preventDefault();
    if (happiness < 70) {
      setHappiness(happiness + 30);      
    } else {
      setHappiness(100);
    }
    setPetGif(petMapping[user.petType].play);
    disableButtons(2);
    playPet = setTimeout(() => {
      if (checkLocation()){
        setPetGif(petMapping[user.petType].idle);
        enableButtons();
      }
    }, 3000);
  };
  
  const trick_pet = (event) => {
    event.preventDefault();
    setPetGif(petMapping[user.petType].trick);
    disableButtons(3);
    trickPet = setTimeout(() => {
      if (checkLocation()){
        setPetGif(petMapping[user.petType].idle);
        enableButtons();
      }
    }, 3000);
  };

  const disableButtons = (idx) => {
    let newDisabledButtons = [true, true, true, true];
    newDisabledButtons[idx] = false;
    setIsDisabledButtons(newDisabledButtons);
  }

  const enableButtons = () => {
    setIsDisabledButtons([false, false, false, false]);
  }

  return (
    <div className='home-btns'>
      <Button animated='fade' onClick = {talk_to_pet} color='green' className='action-btn' size='big' disabled={isDisabledButtons[0]}>
        <Button.Content visible>Talk</Button.Content>
        <Button.Content hidden>  
          <Icon name='comments outline' />
        </Button.Content>
      </Button>

      <Button animated='fade' onClick = {feed_pet} color='olive' className='action-btn' size='big' disabled={isDisabledButtons[1]}>
        <Button.Content visible>Feed</Button.Content>
        <Button.Content hidden>  
          <Icon name='shopping basket'/>
        </Button.Content>
      </Button>
      
      <Button animated='fade' onClick = {play_with_pet} color='google plus' className='action-btn' size='big' disabled={isDisabledButtons[2]}>
        <Button.Content visible>Play</Button.Content>
        <Button.Content hidden>  
          <Icon name='hand paper outline' />
        </Button.Content>
      </Button>

      <Button animated='fade' onClick = {trick_pet} color='twitter' className='action-btn' size='big' disabled={isDisabledButtons[3]}>
        <Button.Content visible>Trick</Button.Content>
        <Button.Content hidden>  
          <Icon name='magic' />
        </Button.Content>
      </Button>
    </div>
   );
}
 
export default UserActions;