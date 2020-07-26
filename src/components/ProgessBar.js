
import React from "react";
import { Progress } from 'semantic-ui-react';

const ProgressBar = () => (
    <div className = 'progress'>
      <h3>Daniel - 1 day old</h3>
        <label>Happiness</label>
        <Progress percent={72} color="green" size = 'small' style={{ marginBottom: '10px' , marginTop: '5px'}}/>
        <label>Hunger</label>
        <Progress percent={59} color="red" size = 'small' style={{ marginTop: '10px', marginBottom: '10px' }} />
    </div>    
  );
  
  export default ProgressBar;