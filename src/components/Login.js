import React, { useState } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import loginService from '../services/login';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await loginService.login({ username, password });
    console.log(response);
  }

  return ( 
    <div className='user-auth-card'>
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
            <Button color='linkedin' type='submit'>Submit</Button>
            <Button className='register-btn' color='vk' type='button'>
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