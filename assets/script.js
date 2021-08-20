var timerEl = document.querySelector(".timer");
var beginQuiz = document.querySelector('#begin');
var quiz = document.getElementById('quiz');
var title = document.getElementById('titlescreen');
// var question = document.querySelector("#question");
// var choiceA = document.querySelector("#choiceA");
// var choiceB = document.querySelector("#choiceB");
// var choiceC = document.querySelector("#choiceC");
// var choiceD = document.querySelector("#choiceD");

function countdown() {
    var secondsLeft = 60;

    var timeInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if (secondsLeft === 0) {
        clearInterval(timeInterval);
      }
    }, 1000);
}

const allQuestions = [
    {
        ask: "This is the question?",
        choices: [
            {text: "This answer is right", correct: true},
            {text: "Or maybe this one", correct: false},
            {text: "This is def wrong", correct: false},
            {text: "Who knows", correct: false},
        ]
    },
    {
        ask: "This is the second question?",
        choices: [
            {text: "A could be wrong now", correct: false},
            {text: "We can never tell with B", correct: false},
            {text: "Perhaps C is right this time", correct: true},
            {text: "I'm hungry", correct: false},
        ]
    },
    {
        ask: "Question number three!",
        choices: [
            {text: "You're doing great, sweetie.", correct: false},
            {text: "Just don't choose this answer.", correct: false},
            {text: "Or this one...", correct: false},
            {text: "Bazinga", correct: true},
        ]
    },
]

var question = document.createElement("h2");
var choice1 = document.createElement("button");
var choice2 = document.createElement("button");
var choice3 = document.createElement("button");
var choice4 = document.createElement("button");

function buildQuestion(input) {

    // for (var i = 0; i < allQuestions.length; i++)

    // var question = document.createElement("h2");
    question.innerHTML = allQuestions[input].ask;
    quiz.appendChild(question);

    // var choice1 = document.createElement("button");
    choice1.textContent = allQuestions[input].choices[0].text;
    quiz.appendChild(choice1);

    // var choice2 = document.createElement("button");
    choice2.textContent = allQuestions[input].choices[1].text;
    quiz.appendChild(choice2);

    // var choice3 = document.createElement("button");
    choice3.textContent = allQuestions[input].choices[2].text;
    quiz.appendChild(choice3);

    // var choice4 = document.createElement("button");
    choice4.textContent = allQuestions[input].choices[3].text;
    quiz.appendChild(choice4);

}


var questionNumber = 0;

function askQuestion() {
    buildQuestion(questionNumber);

    questionNumber++;

    // if (questionNumber > 0) {

    // }
}

// function nextQuestion() {

// var buttons = quiz.getElementsByTagName("button");
// buttons.classList.add("answer-button");
// var answerButtons = quiz.getElementsByClassName("answer-button");
// answerButtons.addEventListener("click", nextQuestion);

//     questionNumber++;

// }


// function removeTitle() {
//     title.classList.add("hidden");
// }

beginQuiz.addEventListener("click", countdown);
beginQuiz.addEventListener("click", askQuestion);
// beginQuiz.addEventListener("click", removeTitle);









// var buttons = quiz.getElementsByTagName("button");
// buttons.classList.add("answer-button");
// var answerButtons = quiz.getElementsByClassName("answer-button");
// answerButtons.addEventListener("click", questionNumber++);

// // buttonEl.addEventListener("click", nextQuestion);

























// var buttons = quiz.getElementsByTagName("button");
// buttons.addEventListener("click", questionNumber++);






// for (var i = 0; i < allQuestions.length; i++)

// .setAttribute('class', 'quiz-btn')



// if (buttons.allQuestions.choices.correct === true) {
//     questionNumber++;
// }

// function nextQuestion() {
//     for (var i = 0; i < allQuestions.length; i++) {
//     questionNumber++;
//     }
// }









// buttonEl.addEventListener("click", nextQuestion);

// function nextQuestion() {
//     questionNumber++;
//     askQuestion();
// }









// buildQuestion(allQuestions[i]);
// for (var i = 0; i < allQuestions.length; i++) {
// }


// if (buttonEl.allQuestions.choices.correct === true) {
//     questionNumber++;
// }


