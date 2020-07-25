import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const UserActions = () => {
  const feed_pet = (event) => {
    event.preventDefault();
    console.log('Feed');
    
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
            <Button animated='fade' onClick = {bathe_pet}>
            <Button.Content visible>Bathe</Button.Content>
            <Button.Content hidden>  
              <Icon name='bath' />
            </Button.Content>
            </Button>
  
            <Button animated='fade' onClick = {feed_pet}>
            <Button.Content visible>Feed</Button.Content>
            <Button.Content hidden>  
              <Icon name='shopping basket'/>
            </Button.Content>
            </Button>
            
            <Button animated='fade' onClick = {play_with_pet}>
            <Button.Content visible>Pet</Button.Content>
            <Button.Content hidden>  
              <Icon name='hand paper outline' />
            </Button.Content>
            </Button>
  
            <Button animated='fade' onClick = {talk_to_pet}>
            <Button.Content visible>Talk</Button.Content>
            <Button.Content hidden>  
              <Icon name='comments outline' />
            </Button.Content>
            </Button>
          </div>
   );
}
 
export default UserActions;