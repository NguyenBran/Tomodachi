
import React from "react";
import { Progress } from 'semantic-ui-react';

const ProgressBar = ({user}) => (
    <div className = 'progress'>
      <h3>{user.petName} - 1 day old</h3>
        <label>Happiness</label>
        <Progress percent={user.petHappiness} color="green" size = 'small' style={{ marginBottom: '10px' , marginTop: '5px'}}/>
        <label>Hunger</label>
        <Progress percent={user.petHunger} color="red" size = 'small' style={{ marginBottom: '10px', marginTop: '5px' }} />
    </div>    
  );
  
  export default ProgressBar;