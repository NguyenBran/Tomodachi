export const totalQuestions = [
    {
        question: 'A delinquent is hassling a girl on a busy street! What will you do?',
        responses: {
            'Help without hesitation': { 'Brave': 3},
            'Help, even if scared': { 'Brave': 2, 'Hardy': 2},
            'Call the police': { 'Docile': 1, 'Relaxed': 1, 'Timid': 1},
            'Do nothing out of fear': { 'Timid': 3},
        }
    },
    {
        question: 'A foreign person has started up a conversation with you. To be honest, you don\'t have a clue what this fellow is saying. How do you reply?',
        responses: {
            'Haha! Yes. Very Funny!': { 'Jolly': 3},
            'Um... Could you say that again?': { 'Hardy': 2},
            'Right... Well, I gotta go': { 'Timid': 2 },
        }
    },
    {
        question: 'A friend brought over something you\'d forgotten. How do you thank your friend?',
        responses: {
            'Say thank you regularly': { 'Docile': 2 },
            'Say thanks with a joke': { 'Lonely': 1, 'Naive': 1 },
            'Say thanks, but be cool': { 'Sassy': 2 }
        }
    },
    {
        question: 'A human hand extends out of a toilet! What would you do?',
        responses: {
            'Scream and run': { 'Timid': 2 },
            'Close the lid without a word': { 'Calm': 2, 'Hardy': 1 },
            'Shake hands with it': { 'Brave': 2, 'Impish': 1, 'Naive': 1 }
        }
    },
    {
        question: 'A test is coming up. How do you study for it?',
        responses: {
            'Study hard': { 'Hardy': 2 },
            'At the last second': { 'Relaxed': 2 },
            'Ignore it and play': { 'Impish': 2 }
        }
    },
    {
        question: 'There is a scream from behind a door! How will you react?',
        responses: {
            'Yank the door open': { 'Brave': 2, 'Hardy': 1 },
            'Scream in unison': { 'Naive': 2 }
        }
    },
    {
        question: 'There is a wallet on the side of the road. What do you do?',
        responses: {
            'Turn it in to the police': { 'Docile': 2 },
            'Yay! Yay!': { 'Naive': 2 },
            'Is anyone watching...': { 'Impish': 2 }
        }
    },
    {
        question: 'There is an alien invasion! What will you do?',
        responses: {
            'Fight': { 'Brave': 4 },
            'Run': { 'Timid': 2 },
            'Ignore it': { 'Relaxed': 2 },
        }
    },
    {
        question: 'which pet would you want?',
        responses: {
            'Pig': { 'Brave': 1000 },
            'Penguin': { 'Timid': 1000 },
            'Pineapple': { 'Jolly': 1000 },
            'Bear': { 'Hardy': 1000 }
        }
    }
    // {
    //     question: 'question',
    //     responses: {
    //         '__': { '__': ___ },
    //         '__': { '__': ___ },
    //         '__': { '__': ___ },
    //         '__': { '__': ___ },
    //     }
    // }

];

export const selectedQuestions = () => {
    let questions = [];
    let pastRandoms = [];
    while(questions.length < 9){
        const rand = Math.floor(Math.random() * totalQuestions.length);
        if (!pastRandoms.includes(rand)){
            questions.push(totalQuestions[rand]);
        }
        pastRandoms.push(rand);
    }
    return questions;
}

export const getResults = (questionAnswers) => {
    let personalities = {
        'Brave': 0,
        'Jolly': 0,
        'Timid': 0,
        'Hardy': 0,
        'Relaxed': 0,
        'Docile': 0,
    }

    let currMax = [null, -1];

    for (let response of questionAnswers) {
        for (let result of Object.entries(response['answer'])){
            personalities[result[0]] += result[1];
            if (personalities[result[0]] > currMax[1]){
                currMax[0] = result[0];
                currMax[1] = personalities[result[0]];
            }
        }
    }
    console.log(personalities);

    switch(currMax[0]){
        case 'Brave':
            return 'pig';
        case 'Timid':
            return 'penguin';
        case 'Jolly':
            return 'pineapple';
        case 'Hardy':
            return 'bear';
        default:
            return null;
    }
}