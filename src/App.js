import React from 'react';
import './App.css';
import animalCrossing from './images/background/animalCrossing.jpg';
import corgi from './images/pets/corgiSwim.gif';

function App() {
  return (
    <div className='background-img' style={{backgroundImage: `url(${animalCrossing})`}}>
      <img className='pet-img' src={corgi} />
    </div>
  );
}

export default App;
