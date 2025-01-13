const questions = [
    {
        "question": "Which of the following is NOT a valid JavaScript data type?",
        "answers": [
            { "text": "string", "correct": false },
            { "text": "boolean", "correct": false },
            { "text": "integer", "correct": true },
            { "text": "undefined", "correct": false }
        ]
    },
    {
        "question": "What does the 'box-sizing' CSS property do?",
        "answers": [
            { "text": "Defines the box model", "correct": true },
            { "text": "Changes the font size of an element", "correct": false },
            { "text": "Sets the border radius of an element", "correct": false },
            { "text": "Controls element visibility", "correct": false }
        ]
    },
    {
        "question": "In JavaScript, what is the value of 'typeof null'?",
        "answers": [
            { "text": "object", "correct": true },
            { "text": "null", "correct": false },
            { "text": "undefined", "correct": false },
            { "text": "error", "correct": false }
        ]
    },
    {
        "question": "What is the purpose of the 'async' attribute in a <script> tag?",
        "answers": [
            { "text": "It allows the script to run asynchronously with the HTML page", "correct": true },
            { "text": "It makes the script execute after the page loads", "correct": false },
            { "text": "It sets the script to run synchronously", "correct": false },
            { "text": "It loads the script in the background", "correct": false }
        ]
    },
    {
        "question": "Which CSS property is used to control the spacing between characters in text?",
        "answers": [
            { text: "letter-spacing", correct: true },
            { text: "word-spacing", correct: false },
            { text: "line-height", correct: false },
            { text: "text-indent", correct: false }
        ]
    },
    {
        "question": "Which HTTP method is used to send data to the server from a form in HTML?",
        "answers": [
            { "text": "POST", "correct": true },
            { "text": "GET", "correct": false },
            { "text": "PUT", "correct": false },
            { "text": "DELETE", "correct": false }
        ]
    },
    {
        "question": "What does 'this' refer to in JavaScript?",
        "answers": [
            { "text": "The object from which the function is called", "correct": true },
            { "text": "The function itself", "correct": false },
            { "text": "The global object", "correct": false },
            { "text": "The element the function is applied to", "correct": false }
        ]
    },
    {
        "question": "Which CSS property is used to add a shadow effect to text?",
        "answers": [
            { "text": "text-shadow", "correct": true },
            { "text": "box-shadow", "correct": false },
            { "text": "shadow-effect", "correct": false },
            { "text": "text-effect", "correct": false }
        ]
    },
    {
        "question": "Which method can be used to change the content of an HTML element using JavaScript?",
        "answers": [
            { "text": "innerHTML", "correct": false },
            { "text": "textContent", "correct": false },
            { "text": "Both A & B", "correct": true },
            { "text": "contentText", "correct": false }
        ]
    },
    {
        "question": "What does the 'localStorage' object do in JavaScript?",
        "answers": [
            { "text": "Stores data for the duration of the page session", "correct": false },
            { "text": "Stores data for the duration of the browser session", "correct": false },
            { "text": "Stores data persistently in the browser", "correct": true },
            { "text": "Stores data temporarily in memory", "correct": false }
        ]
    },
    {
        "question": "What is the purpose of the 'z-index' CSS property?",
        "answers": [
            { "text": "Controls the stack order of elements", "correct": true },
            { "text": "Sets the opacity of an element", "correct": false },
            { "text": "Sets the margin of an element", "correct": false },
            { "text": "Changes the element's size", "correct": false }
        ]
    },
    {
        "question": "What does the 'grid' value of the 'display' property do in CSS?",
        "answers": [
            { "text": "Creates a grid layout with rows and columns", "correct": true },
            { "text": "Displays items inline", "correct": false },
            { "text": "Displays items in a flex container", "correct": false },
            { "text": "Applies a fixed layout to elements", "correct": false }
        ]
    },
    {
        "question": "What is the default value of the 'position' property in CSS?",
        "answers": [
            { "text": "static", "correct": true },
            { "text": "relative", "correct": false },
            { "text": "absolute", "correct": false },
            { "text": "fixed", "correct": false }
        ]
    },
    {
        "question": "What does the 'flex-grow' property do in CSS?",
        "answers": [
            { "text": "Determines how much an element should grow relative to others", "correct": true },
            { "text": "Controls the alignment of the item within a flex container", "correct": false },
            { "text": "Determines the initial size of the element", "correct": false },
            { "text": "Specifies the direction of the flex container", "correct": false }
        ]
    },
    {
        "question": "What is the purpose of the 'event.preventDefault()' method in JavaScript?",
        "answers": [
            { "text": "Prevents the default action of the event", "correct": true },
            { "text": "Triggers the default action of the event", "correct": false },
            { "text": "Stops the event from propagating", "correct": false },
            { "text": "Prevents the event from being executed", "correct": false }
        ]
    },
    {
        "question": "Which of the following is a JavaScript framework?",
        "answers": [
            { "text": "React", "correct": true },
            { "text": "CSS", "correct": false },
            { "text": "HTML", "correct": false },
            { "text": "Bootstrap", "correct": false }
        ]
    },
    {
        "question": "What does the 'float' property in CSS do?",
        "answers": [
            { "text": "Positions an element to the left or right of its container", "correct": true },
            { "text": "Centers an element horizontally", "correct": false },
            { "text": "Changes the opacity of an element", "correct": false },
            { "text": "Adjusts the z-index of an element", "correct": false }
        ]
    },
    {
        "question": "What is the purpose of the 'DOMContentLoaded' event in JavaScript?",
        "answers": [
            { "text": "Fires when the entire HTML document has been completely loaded and parsed", "correct": true },
            { "text": "Fires when all resources like images and stylesheets are loaded", "correct": false },
            { "text": "Fires when the user interacts with the DOM", "correct": false },
            { "text": "Fires before the DOM is loaded", "correct": false }
        ]
    },
    {
        "question": "Which of the following CSS properties is used to make an element invisible but still occupy space?",
        "answers": [
            { "text": "visibility", "correct": true },
            { "text": "display", "correct": false },
            { "text": "opacity", "correct": false },
            { "text": "z-index", "correct": false }
        ]
    },
    {
        "question": "What is the difference between '==' and '===' in JavaScript?",
        "answers": [
            { "text": "'==' checks value equality, while '===' checks both value and type equality", "correct": true },
            { "text": "'==' checks both value and type equality, while '===' checks only value equality", "correct": false },
            { "text": "Both are identical and interchangeable", "correct": false },
            { "text": "'===' is only used for strings", "correct": false }
        ]
    }    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();