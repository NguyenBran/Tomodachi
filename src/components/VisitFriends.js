import React, { useState } from 'react';
import userService from '../services/user';
import { useHistory } from 'react-router';
import { Card, Form, Button } from 'semantic-ui-react';
import ReactAudioPlayer from 'react-audio-player';
import cianwoodCityMusic from '../music/cianwood-city.mp3';

const VisitFriends = () => {
    const [friendUsername, setFriendUsername] = useState('');
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const visit = async (event) => {
        event.preventDefault();
        const response = await userService.visitInfo(friendUsername);
        history.push('/', { visit: response });
    }

    return (
        <div className='user-auth-card'>
        <ReactAudioPlayer
          src={cianwoodCityMusic}
          autoPlay={true}
          volume={.1}
          loop={true}
        />
        <Card className='fade-in'>
          <Card.Content>
            <Form onSubmit={visit}>
              <Form.Field>
                <label>Enter your friend's username!</label>
                <input value={friendUsername} onChange={(e) => setFriendUsername(e.target.value)} />
              </Form.Field>
              <Button color='linkedin' type='submit' loading={loading}>Visit!</Button>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
}

export default VisitFriends;