var timerEl = document.querySelector(".timer");
var beginQuiz = document.querySelector('#begin');
var quiz = document.getElementById('quiz');
// var question = document.querySelector("#question");
// var choiceA = document.querySelector("#choiceA");
// var choiceB = document.querySelector("#choiceB");
// var choiceC = document.querySelector("#choiceC");
// var choiceD = document.querySelector("#choiceD");

function countdown() {
    var secondsLeft = 300;

    var timeInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if (secondsLeft === 0) {
        clearInterval(timeInterval);
      }
    }, 1000);
}

const question1 = {
    ask: "This is the question?",
    choiceA: "This answer is right",
    choiceB: "Or maybe this one",
    choiceC: "This is def wrong",
    choiceD: "Who knows"
}

const question2 = {
    ask: "This is the second question?",
    choiceA: "A could be wrong now",
    choiceB: "We never can tell about B",
    choiceC: "Perhaps C is right this time",
    choiceD: "I'm hungry"
}

var allQuestions = [question1, question2];

function buildQuestion(input) {
    var question = document.createElement("h2");
    question.textContent = input.ask;
    quiz.appendChild(question);

    var choice1 = document.createElement("button");
    choice1.textContent = input.choiceA;
    quiz.appendChild(choice1);

    var choice2 = document.createElement("button");
    choice2.textContent = input.choiceB;
    quiz.appendChild(choice2);

    var choice3 = document.createElement("button");
    choice3.textContent = input.choiceC;
    quiz.appendChild(choice3);

    var choice4 = document.createElement("button");
    choice4.textContent = input.choiceD;
    quiz.appendChild(choice4);

}

function askQuestion() {
    buildQuestion(question1);
    // buildQuestion(allQuestions[i]);

    // for (var i = 0; i < allQuestions.length; i++) {

    // }

}

beginQuiz.addEventListener("click", countdown);
beginQuiz.addEventListener("click", askQuestion);