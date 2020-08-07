import React, { useState } from 'react';
import { Button, Card, Form, Select } from 'semantic-ui-react';
import ReactAudioPlayer from'react-audio-player';

import history from '../history';
import cianwoodCityMusic from '../music/cianwood-city.mp3';
import { selectedQuestions, getResults } from '../utils/questions';
import userService from '../services/user';

const questions = selectedQuestions();
let questionAnswers = questions.map((question) => {
    return ({
        question: question.question,
        answer: null
    });
});

const PetSelector = () => {
    const [petName, setPetName] = useState('');

    const handleAnswer = (answer, index) => {
        questionAnswers[index].answer = questions[index].responses[answer];
    }

    const handleQuestionAnswers = async () => {
        const petType = getResults(questionAnswers);
        const id = sessionStorage.getItem("id");
        await userService.createPet(id, { petName, petType });
        history.push('/');
    }

    const buildSelectOptions = (responses, index) => {
        return Object.entries(responses).map((response, i) => {
            return {
                key: [index, i],
                value: response[0],
                text: response[0]
            }
        });
    }

    const renderedQuestions = questions.map((question, index) => {
        return (
            <Form.Field key={index}>
                <label>{question.question}</label>
                    <Select 
                        placeholder='Select your response' 
                        options={buildSelectOptions(question.responses, index)}
                        onChange={(e) => handleAnswer(e.target.textContent, index)}
                    />
            </Form.Field>
        );
    });
    

    return (
        <div className='pet-questionnaire'>
            <ReactAudioPlayer
                src={cianwoodCityMusic}
                autoPlay={true}
                volume={.1}
                loop={true}
            />
            <Card className='fade-in'>
                <Card.Content>
                    <Form onSubmit={handleQuestionAnswers}>
                        <Form.Field>
                            <label>Questionnaire</label>
                        </Form.Field>
                        <Form.Field>
                            <label>Pet Name</label>
                            <input value={petName} onChange={(event) => setPetName(event.target.value)}/>
                        </Form.Field>
                            {renderedQuestions}
                        <Button color='linkedin' type='submit'>Submit</Button>
                    </Form>
                </Card.Content>
            </Card>
        </div>

    );
}

export default PetSelector;