
import React from "react";
import { Progress } from 'semantic-ui-react';
import helper from '../utils/helper';

const ProgressBar = ({user, hunger, happiness}) => (
    <div className = 'progress'>
      <h3>{user.petName}, {helper.timeSince(user.petAge)} old</h3>
        <label>Happiness</label>
        <Progress active progress='percent' percent={happiness} color="green" size = 'medium' style={{ marginBottom: '10px' , marginTop: '5px'}} />
        <label>Hunger</label>
        <Progress active progress='percent' percent={hunger} color="red" size = 'medium' style={{ marginBottom: '10px', marginTop: '5px' }} />
    </div>    
  );
  
  export default ProgressBar;