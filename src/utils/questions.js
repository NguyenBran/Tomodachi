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
        question: 'which pet would you want?',
        responses: {
            'Pig': { 'Brave': 1000 },
            'Penguin': { 'Timid': 1000 },
            'Pineapple': { 'Jolly': 1000 },
            'Bear': { 'Hardy': 1000 }
        }
    }

];

export const selectedQuestions = () => {
    let questions = []
    for (let question of totalQuestions) {
        questions.push(question);
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
        console.log(response);
        for (let result of Object.entries(response['answer'])){
            console.log(result);
            personalities[result[0]] += result[1];
            if (personalities[result[0]] > currMax[1]){
                currMax[0] = result[0];
                currMax[1] = personalities[result[0]];
            }
        }
    }

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