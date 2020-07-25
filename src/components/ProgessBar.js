import React from "react";
import { Progress } from 'semantic-ui-react';

const ProgressExampleColor = () => {
    <div>
        <Progress percent={32} color='red' />
    </div>

    return (
        <div>
            <div class="ui red progress" data-percent="32"><div class="bar" style="width:32%"></div></div>
        </div>
    )
}



  
export default ProgressExampleColor