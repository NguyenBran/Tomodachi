import React, { useState } from 'react';
import Game from './Game';
import userService from '../services/user';

const Visit = (props) => {
    const [friendId, setFriendId] = useState(null);
    const buildFriendUser = async () => {
        const response = await userService.visitInfo(props.match.params.username);
        setFriendId(response.id);
    }
    buildFriendUser();

    return (
        <Game id={friendId}/>
    );
};

export default Visit;