var timerEl = document.querySelector(".timer");
var beginQuiz = document.querySelector('#begin');
var quiz = document.getElementById('quiz');
var title = document.getElementById('titlescreen');

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
        ask: "HTML gives body to a webpage. What does HTML stand for?",
        choices: [
            {text: "HyperText Markup Language", correct: true},
            {text: "High Traffic Messaging Lexicon", correct: false},
            {text: "Holistically Truncated Mapping Library", correct: false},
            {text: "Hot Tamales, My Love", correct: false},
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
    {
        ask: "Who bodied that, ate it up and gave it back?",
        choices: [
            {text: "Cardi", correct: false},
            {text: "Megan", correct: true},
            {text: "Saweetie", correct: false},
            {text: "Doja", correct: true},
        ]
    },
]
console.log(allQuestions);




var choices = allQuestions.forEach(value => {
        var selection = value.choices;
        selection.forEach(function getChoice(value) {console.log(value)})
    } 
)


var question = document.createElement("h2");
var choice1 = document.createElement("button");
var choice2 = document.createElement("button");
var choice3 = document.createElement("button");
var choice4 = document.createElement("button");

function buildQuestion(questionNumber) {
    question.innerHTML = allQuestions[questionNumber].ask;
    quiz.appendChild(question);

    choice1.textContent = allQuestions[questionNumber].choices[0].text;
    quiz.appendChild(choice1);

    choice2.textContent = allQuestions[questionNumber].choices[1].text;
    quiz.appendChild(choice2);

    choice3.textContent = allQuestions[questionNumber].choices[2].text;
    quiz.appendChild(choice3);

    choice4.textContent = allQuestions[questionNumber].choices[3].text;
    quiz.appendChild(choice4);
}

var questionNumber = 0;

function askQuestion() {
    buildQuestion(questionNumber);
}







choice1.addEventListener("click", nextQuestion);
choice2.addEventListener("click", nextQuestion);
choice3.addEventListener("click", nextQuestion);
choice4.addEventListener("click", nextQuestion);

// var slot1 = allQuestions[questionNumber].choices[0].correct;
// var slot2 = allQuestions[questionNumber].choices[1].correct;
// var slot3 = allQuestions[questionNumber].choices[2].correct;
// var slot4 = allQuestions[questionNumber].choices[3].correct;

function nextQuestion() {
    // console.log(this.textContent);
    // // console.log(this.value);

    questionNumber++;
    question.innerHTML = allQuestions[questionNumber].ask;

    choice1.textContent = allQuestions[questionNumber].choices[0].text;
    // choice1.value = slot1;
    // console.log(this.value);
    choice2.textContent = allQuestions[questionNumber].choices[1].text;
    // choice2.value = slot2;
    choice3.textContent = allQuestions[questionNumber].choices[2].text;
    // choice3.value = slot3;
    choice4.textContent = allQuestions[questionNumber].choices[3].text;
    // choice4.value = slot4;

    // if (this.value === true) {
    //     console.log("Correct!"); }
    //     else {
    //         console.log("incorrect");
    //     }
    
    // if (questionNumber >= allQuestions.length) {
    //     return;
    // }
    
}


function removeTitle() {
    title.remove();
}

beginQuiz.addEventListener("click", countdown);
beginQuiz.addEventListener("click", askQuestion);
beginQuiz.addEventListener("click", removeTitle);









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


