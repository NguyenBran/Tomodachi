import React from "react";
import { Progress } from 'semantic-ui-react';

const ProgressBar = () => (
    <div className = 'progress'>
    <h3>Daniel</h3>
      <Progress percent={72} color="green" size = 'small' label = 'Happiness'/>

      <Progress percent={59} color="red" size = 'small' label = 'Hunger'/>

      <Progress percent={13} color="blue" size = 'small' label = 'Cleaniness' />
     <h5>Age: </h5>
    </div>


    
  );
  

  export default ProgressBar;
