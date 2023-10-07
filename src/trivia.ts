export interface Question {
    text: string;
    options: string[];
    correctOption: number;
}

const triviaQuestions: Question[] = [
    {
        text: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Madrid"],
        correctOption: 2
    },
    {
        text: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctOption: 0
    },
    {
        text: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
        correctOption: 1
    }
];

export function getRandomQuestion(): Question {
    const randomIndex = Math.floor(Math.random() * triviaQuestions.length);
    return triviaQuestions[randomIndex];
}
