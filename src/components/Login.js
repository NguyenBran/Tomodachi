import React, { useState } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom';

import loginService from '../services/login';
import history from '../history';
import cianwoodCityMusic from '../music/cianwood-city.mp3';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await loginService.login({ username, password });
    if (response){
      sessionStorage.setItem('username', response.username);
      sessionStorage.setItem('id', response.id);
      history.push('/');
    }
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
              <label>Username</label>
              <input onChange={handleUsernameChange} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type='password' onChange={handlePasswordChange} /> 
            </Form.Field>
            <Button color='linkedin' type='submit' loading={loading}>Submit</Button>
            <Button className='right-position-btn' color='vk' type='button'>
              <Link to='/register' style={{color: 'white'}}>
                Register
              </Link>
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
 
export default Login;