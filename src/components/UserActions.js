import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import pig from '../images/pets/pig.gif';
import corgi from '../images/pets/corgiSwim.gif';


const UserActions = ({setPetGif}) => {
  const feed_pet = (event) => {
    event.preventDefault();
    console.log('Feed');
    setPetGif(pig);
    setTimeout(() => {
      setPetGif(corgi);
    }, 3000);
  };
  
  const play_with_pet = (event) => {
    event.preventDefault();
    console.log('Pet');
  };
  
  const bathe_pet = (event) => {
    event.preventDefault();
    console.log('Bathe');
  };
  
  const talk_to_pet = (event) => {
    event.preventDefault();
    console.log('Talk');
  };

  return ( 
    <div className='home-btns'>

      <Button animated='fade' onClick = {talk_to_pet} color='green' className='action-btn'>
        <Button.Content visible>Talk</Button.Content>
        <Button.Content hidden>  
          <Icon name='comments outline' />
        </Button.Content>
      </Button>

      <Button animated='fade' onClick = {feed_pet} color='olive' className='action-btn'>
        <Button.Content visible>Feed</Button.Content>
        <Button.Content hidden>  
          <Icon name='shopping basket'/>
        </Button.Content>
      </Button>
      
      <Button animated='fade' onClick = {play_with_pet} color='google plus' className='action-btn'>
        <Button.Content visible>Pet</Button.Content>
        <Button.Content hidden>  
          <Icon name='hand paper outline' />
        </Button.Content>
      </Button>

      <Button animated='fade' onClick = {bathe_pet} color='twitter' className='action-btn'>
        <Button.Content visible>Bathe</Button.Content>
        <Button.Content hidden>  
          <Icon name='bath' />
        </Button.Content>
      </Button>
    </div>
   );
}
 
export default UserActions;