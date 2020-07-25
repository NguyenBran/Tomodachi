import React, { useState } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  }

  return ( 
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
          <Button className='register-btn' color='vk' type='button'>Register</Button>
        </Form>
      </Card.Content>
    </Card>
  );
}
 
export default Login;