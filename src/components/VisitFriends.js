import React, { useState } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';
import ReactAudioPlayer from 'react-audio-player';
import cianwoodCityMusic from '../music/cianwood-city.mp3';
import { Link } from 'react-router-dom';
import history from '../history';

const VisitFriends = () => {
    const [friendUsername, setFriendUsername] = useState('');
    const [loading, setLoading] = useState(false);

    const visit = (event) => {
        event.preventDefault();
        setLoading(true);
        history.push(`/visit/${friendUsername}`);
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
              <Button className='right-position-btn' color='vk' type='button'>
                <Link to='/' style={{color: 'white'}}>
                  Return Home!
                </Link>
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
}

export default VisitFriends;