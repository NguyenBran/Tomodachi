
import React from "react";
import { Progress } from 'semantic-ui-react';
import helper from '../utils/helper';

const ProgressBar = ({user, hunger, happiness}) => (
    <div className = 'progress'>
      <h3>{user.petName} - {helper.timeSince(user.petAge)} old</h3>
        <label>Happiness</label>
<Progress active  percent={happiness} color="green" size = 'small' style={{ marginBottom: '10px' , marginTop: '5px'}}>{happiness}%</Progress>
        <label>Hunger</label>
<Progress active percent={hunger} color="red" size = 'small' style={{ marginBottom: '10px', marginTop: '5px' }}>{hunger}%</Progress>
    </div>    
  );
  
  export default ProgressBar;