
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import animalCrossing from '../images/background/animalCrossing.jpg';
import animalCrossingMusic from '../music/animal-crossing.mp3';
import corgi from '../images/pets/corgiSwim.gif';
import { Button, Icon } from 'semantic-ui-react';

const Game = () => {  
  return ( 
    <div className='container'>
      <ReactAudioPlayer
        src={animalCrossingMusic}
        autoPlay={true}
        volume={.1}
        loop={true}
      />
      <div className='background-img' style={{ backgroundImage: `url(${animalCrossing})`}}>

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
      <img className='pet-img' src={corgi} alt='pet' />
      
    </div>

  );
  function feed_pet() {
    function handleClick(e) {
      e.preventDefault();
    }
      console.log('Feed');
    
  };
  
  function play_with_pet() {
    function handleClick(e) {
      e.preventDefault();
    }
      console.log('Pet');
    
  };
  
  function bathe_pet() {
    function handleClick(e) {
      e.preventDefault();
    }
    console.log('Bathe');
  };
  
  function talk_to_pet() {
    function handleClick(e) {
      e.preventDefault();
    }
    console.log('Talk');
  };


}


 
export default Game;
