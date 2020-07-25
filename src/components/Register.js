import React, { useState } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';
import userService from '../services/user';

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
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
 
export default Register;