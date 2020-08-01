import React, { useState } from 'react';
import Game from './Game';

const VisitFriends = () => {
    const [friendInfo, setFriendInfo] = useState(null);
    const [friendUsername, setFriendUsername] = useState('');

    const visit = (event) => {
        event.preventDefault();
        console.log(friendUsername);
    }
    return (
        <>
            <div className="ui container">
                <div className="friend-form ui segment">
                    <div className="ui form">
                        <div className="header">
                            Enter your friend's username:
                        </div>
                        <div className="ui item">
                            <input 
                                type="text" 
                                value={friendUsername} 
                                onChange={(event) => setFriendUsername(event.target.value)} 
                            />
                            <button 
                                className="ui twitter small button" 
                                type="submit" 
                                style={{margin: "5px"}} 
                                onClick={visit}
                            >
                                Visit!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {friendInfo && <Game />}
        </>
        
    );
}

export default VisitFriends;