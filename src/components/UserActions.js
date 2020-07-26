import React, { useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const UserActions = ({setPetGif, user, petMapping, hunger, happiness, setHunger, setHappiness}) => {
  let feedPet = null;
  let playPet = null;
  let bathePet = null;
  let talkPet = null;


  useEffect(() => {
    return () => {
      clearTimeout(feedPet);
      clearTimeout(playPet);
      clearTimeout(bathePet);
      clearTimeout(talkPet);
    }
  }, []);

  const feed_pet = (event) => {
    event.preventDefault();
    setHunger(hunger + 30);
    setPetGif(petMapping[user.petType].feed);
    feedPet = setTimeout(() => {
      setPetGif(petMapping[user.petType].idle);
    }, 3000);
  };
  
  const play_with_pet = (event) => {
    event.preventDefault();
    setHappiness(happiness + 30);
    setPetGif(petMapping[user.petType].play);
    playPet = setTimeout(() => {
      setPetGif(petMapping[user.petType].idle);
    }, 3000);

  };
  
  const bathe_pet = (event) => {
    event.preventDefault();
    setPetGif(petMapping[user.petType].bathe);
    bathePet = setTimeout(() => {
      setPetGif(petMapping[user.petType].idle);
    }, 3000);
  };
  
  const talk_to_pet = (event) => {
    event.preventDefault();
    setPetGif(petMapping[user.petType].talk);
    talkPet = setTimeout(() => {
      setPetGif(petMapping[user.petType].idle);
    }, 3000);
  };

  return ( 
    <div className='home-btns'>

      <Button animated='fade' onClick = {talk_to_pet} color='green' className='action-btn' size='big'>
        <Button.Content visible>Talk</Button.Content>
        <Button.Content hidden>  
          <Icon name='comments outline' />
        </Button.Content>
      </Button>

      <Button animated='fade' onClick = {feed_pet} color='olive' className='action-btn' size='big'>
        <Button.Content visible>Feed</Button.Content>
        <Button.Content hidden>  
          <Icon name='shopping basket'/>
        </Button.Content>
      </Button>
      
      <Button animated='fade' onClick = {play_with_pet} color='google plus' className='action-btn' size='big'>
        <Button.Content visible>Play</Button.Content>
        <Button.Content hidden>  
          <Icon name='hand paper outline' />
        </Button.Content>
      </Button>

      <Button animated='fade' onClick = {bathe_pet} color='twitter' className='action-btn' size='big'>
        <Button.Content visible>Bathe</Button.Content>
        <Button.Content hidden>  
          <Icon name='bath' />
        </Button.Content>
      </Button>
    </div>
   );
}
 
export default UserActions;