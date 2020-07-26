import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import penguins from '../utils/penguinGifs';

const UserActions = ({setPetGif}) => {
  const feed_pet = (event) => {
    event.preventDefault();
    console.log('Feed');
    setPetGif(penguins.feedPenguin);
    setTimeout(() => {
      setPetGif(penguins.happyPenguin);
    }, 3000);
  };
  
  const play_with_pet = (event) => {
    event.preventDefault();
    console.log('Pet');
    setPetGif(penguins.playPenguin);
    setTimeout(() => {
      setPetGif(penguins.happyPenguin);
    }, 3000);
  };
  
  const bathe_pet = (event) => {
    event.preventDefault();
    console.log('Bathe');
    setPetGif(penguins.sadPenguin);
    setTimeout(() => {
      setPetGif(penguins.happyPenguin);
    }, 3000);
  };
  
  const talk_to_pet = (event) => {
    event.preventDefault();
    console.log('Talk');
    setPetGif(penguins.idlePenguin);
    setTimeout(() => {
      setPetGif(penguins.happyPenguin);
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