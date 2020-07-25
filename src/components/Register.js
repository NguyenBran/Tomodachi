import React, { useState } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';
import userService from '../services/user';
import cianwoodCityMusic from '../music/cianwood-city.mp3';
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await userService.register({ fullName, username, password });
    console.log(response);
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
          <Form onSubmit={handleLogin}>
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
            <Button color='linkedin' type='submit'>Submit</Button>
            <Button color='twitter' type='button' className='right-position-btn'>
              <Link to='/login' style={{ color: 'white' }}>
                Log In
              </Link>
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
 
export default Register;