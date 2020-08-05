import React, { useEffect } from 'react';
import { Button, Card, Form } from 'semantic-ui-react';
import ReactAudioPlayer from'react-audio-player';

import cianwoodCityMusic from '../music/cianwood-city.mp3';
import { totalQuestions } from '../utils/questions';

const PetSelector = () => {
    let questions = totalQuestions;
    let questionAnswers = totalQuestions.map((question) => {
        return ({
            question: question.question,
            answer: null
        });
    });

    useEffect (() => {
        buildQuestionAnswer();
    }, []);

    const handleAnswer = (index, question, answer) => {
        questionAnswers[index] = {question, answer};
    }

    const handleQuestionAnswers = () => {
        console.log(questionAnswers);
    }

    const buildQuestionAnswer = () => {
        
    };

    const buildOptions = (responses, index) => {
        const results = Object.entries(responses);
        return results.map((result, i) => {
            return (
                <option key={[index, i]} value={result[1]}>
                    {result[0]}
                </option>
            );
        });
    }

    const renderedQuestions = questions.map((question, index) => {
        return (
            <Form.Field key={index}>
                <label>{question.question}</label>
                <select className="ui dropdown" >
                    <option disabled selected>Select From Below</option>
                    {buildOptions(question.responses, index)}
                </select>
            </Form.Field>
        );
    });
    console.log(questionAnswers);
    

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
                    <Form onSubmit={handleQuestionAnswers}>
                        <Form.Field>
                            <label>Questionnaire</label>
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