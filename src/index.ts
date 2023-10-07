import { getRandomQuestion, Question } from './trivia';

let currentQuestion: null | Question = null;

function displayQuestion() {
    const questionContainer = document.getElementById('question-container')!;
    questionContainer.innerHTML = '';

    const question = getRandomQuestion();
    currentQuestion = question;

    const questionElement = document.createElement('p');
    questionElement.textContent = question.text;

    const optionsElement = document.createElement('ul');
    optionsElement.classList.add('options');

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('li');
        optionElement.textContent = option;
        optionElement.dataset.index = index.toString();
        optionElement.addEventListener('click', handleOptionClick);
        optionsElement.appendChild(optionElement);
    });

    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(optionsElement);
}

function handleOptionClick(event: Event) {
    const selectedOption = (event.target as HTMLElement).dataset.index;
    if (selectedOption !== undefined && currentQuestion !== null) {
        const selectedOptionIndex = parseInt(selectedOption, 10);
        const isCorrect = selectedOptionIndex === currentQuestion.correctOption;
        displayFeedback(isCorrect);
    }
}

function displayFeedback(isCorrect: boolean) {
    const feedbackContainer = document.getElementById('feedback-container')!;
    feedbackContainer.innerHTML = '';

    const feedbackElement = document.createElement('p');
    feedbackElement.textContent = isCorrect ? 'Correct!' : 'Incorrect';
    feedbackElement.classList.add(isCorrect ? 'correct' : 'incorrect');

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next Question';
    nextButton.addEventListener('click', displayQuestion);

    feedbackContainer.appendChild(feedbackElement);
    feedbackContainer.appendChild(nextButton);
}

displayQuestion();
