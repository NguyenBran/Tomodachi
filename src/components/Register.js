import React, { useState } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';
import ReactAudioPlayer from 'react-audio-player'

import userService from '../services/user';
import cianwoodCityMusic from '../music/cianwood-city.mp3';
import history from '../history';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await userService.register({ fullName, username, password });
    sessionStorage.setItem('username', response.username);
    sessionStorage.setItem('id', response.id);
    history.push('/petSelector');
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
          <Form onSubmit={handleRegister}>
          <Form.Field>
              <label>Full Name</label>
              <input onChange={handleFullNameChange} />
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <input onChange={handleUsernameChange} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type='password' onChange={handlePasswordChange} /> 
            </Form.Field>
            <Button color='linkedin' type='submit' loading={loading}>Submit</Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
 
export default Register;