import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Card, Form, Button } from 'semantic-ui-react';
import history from '../history';
import animalCrossingMusic from '../music/animal-crossing.mp3';
import userService from '../services/user';


const CreatePet = () => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('penguin');

    const handlePetName = (event) => {
        setPetName(event.target.value);
    }

    const handlePetType = (event) => {
        setPetType(event.target.value);
    }

    const handleCreatePet = async (event) => {
        event.preventDefault();
        const id = sessionStorage.getItem("id");
        await userService.createPet(id, { petName, petType });
        history.push('/');
    }

    return (
        <div className='user-auth-card'>
        <ReactAudioPlayer
            src={animalCrossingMusic}
            autoPlay={true}
            volume={.1}
            loop={true}
        />
        <Card className='fade-in'>
            <Card.Content>
            <Form onSubmit={handleCreatePet}>
                <Form.Field>
                    <label>Pet Name</label>
                    <input value={petName} onChange={handlePetName}/>
                </Form.Field>
                <Form.Field>
                    <label>Choose A Pet!</label>
                    <select className="ui dropdown" onChange={handlePetType}>
                        <option value="penguin">Penguin</option>
                        <option value="pineapple">Pineapple</option>
                        <option value="pig">Pig</option>
                        <option value="bear">Bear</option>
                    </select>
                </Form.Field>
                <Button color='linkedin' type='submit'>Submit</Button>
            </Form>
            </Card.Content>
        </Card>
        </div>
    );
};


export default CreatePet;