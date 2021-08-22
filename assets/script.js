var timerEl = document.querySelector(".timer");
var beginQuiz = document.querySelector('#begin');
var quiz = document.getElementById('quiz');
var title = document.getElementById('titlescreen');




var secondsLeft = 60;

function countdown() {

    var timeInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if (secondsLeft === 0) {
        clearInterval(endTitle);
        quiz.remove();
        timerEl.remove();
        endTitle();
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
        ask: "We need a way for text on our page to stand out. What tag can we use for this?",
        choices: [
            {text: "<em>", correct: false},
            {text: "<bold>", correct: false},
            {text: "<strong>", correct: true},
            {text: "<lookatme>", correct: false},
        ]
    },
    {
        ask: "Now that we're looking at our HTML, which is not a section or element that can make up our page?",
        choices: [
            {text: "<head>", correct: false},
            {text: "<shoulder>", correct: true},
            {text: "<body>", correct: false},
            {text: "<footer>", correct: false},
        ]
    },
    {
        ask: "Times New Roman on a white background is ugly. What language primarily be used to style HTML?",
        choices: [
            {text: "CSS", correct: true},
            {text: "Python", correct: false},
            {text: "JavaScript", correct: false},
            {text: "Catalan", correct: false},
        ]
    },
    {
        ask: "She's got the looks but our page is cluttered. What can we use to reorganize our page in different layouts?",
        choices: [
            {text: "Media queries can set new specifications for elements when viewing our page at different browser widths", correct: false},
            {text: "Turning our device sideways can help see things from a new perspective", correct: false},
            {text: "Flex containers can automatically create new rows of elements on our page", correct: false},
            {text: "Choices 1 and 3 are both useful", correct: true},
        ]
    },
    {
        ask: "Various kinds of positioning properties will help us determine how elements are placed on our page. Which is not a kind of positioning property?",
        choices: [
            {text: "absolute", correct: false},
            {text: "relative", correct: false},
            {text: "prime", correct: true},
            {text: "fixed", correct: false},
        ]
    },
    {
        ask: "JavaScript adds event-driven functions to our page. What can be added in our code to trigger these functions?",
        choices: [
            {text: "Situation monitors", correct: false},
            {text: "Thing scouters", correct: false},
            {text: "Circumstance hearers", correct: false},
            {text: "Event listeners", correct: true},
        ]
    },
    {
        ask: "Variables can help store values in our functions. A variable assigned multiple values can be called a what?",
        choices: [
            {text: "A table", correct: false},
            {text: "An array", correct: true},
            {text: "A library", correct: false},
            {text: "The grocery list", correct: false},
        ]
    },
    {
        ask: "JavaScript can help us navigate our HTML and create new elements with events. Which is not a way to traverse or alter an HTML document?",
        choices: [
            {text: "motherlode", correct: true},
            {text: "querySelector", correct: false},
            {text: "getElementById", correct: false},
            {text: "appendChild", correct: false},
        ]
    },
    {
        ask: "We built our page! What command can we use from our local computer to send our files to a remote repository for other developers to view?",
        choices: [
            {text: "git push", correct: true},
            {text: "git shove", correct: true},
            {text: "git on", correct: false},
            {text: "git out", correct: false},
        ]
    },
]




var question = document.createElement("h2");
var choice1 = document.createElement("button");
var choice2 = document.createElement("button");
var choice3 = document.createElement("button");
var choice4 = document.createElement("button");

function buildQuestion(questionNumber) {
    question.innerHTML = allQuestions[questionNumber].ask;
    quiz.appendChild(question);

    allQuestions[questionNumber].choices.forEach(function (choice, index) {

        var btnChoice = document.createElement("button");

        btnChoice.textContent = choice.text;
        btnChoice.value = choice.correct;
        btnChoice.setAttribute("class", `btn-choice btn-num-${index}`);
        quiz.appendChild(btnChoice);
    })

    var answerButtons = document.getElementsByClassName("btn-choice");
    
    Array.from(answerButtons).forEach(function (answerButton) {
        answerButton.addEventListener("click", nextQuestion)
    })

}

var questionNumber = 0;

function askQuestion() {
    buildQuestion(questionNumber);
}




function nextQuestion() {
    
    // console.log(this.value);
    if (!this.value) {
        secondsLeft - 10;
    } else if (!this.value && secondsLeft < 10) {
        quiz.remove();
        timerEl.remove();
    }

    if (questionNumber < allQuestions.length - 1) {
        questionNumber++;
    } else {
        quiz.remove();
        timerEl.remove();
        endTitle();
    }
   
    question.innerHTML = allQuestions[questionNumber].ask;

    allQuestions[questionNumber].choices.forEach(function (choice, index) {
        var choiceBtn = document.getElementsByClassName(`btn-num-${index}`)
        choiceBtn[0].textContent = choice.text;
        choiceBtn[0].value = choice.correct;
    })   
}




var endScreen = document.getElementById("endscore");
var finishedWith = document.createElement("h3");
var formArea = document.getElementById("form");
var lastPlayer = document.getElementById("lastplayer");

function endTitle() {
    endScreen.setAttribute("style", "display: block");
    lastPlayer.setAttribute("style", "display: block");
    finishedWith.innerHTML = "You finished with " + secondsLeft + " seconds left.";
    endScreen.appendChild(finishedWith);
    formArea.setAttribute("style", "display: block");
}




var playerName = document.querySelector("#playername");
var submitName = document.querySelector("#submit");
var msgDiv = document.querySelector("#message");
var lastPlayerName = document.querySelector("#last-player-name");

renderLastPlayer();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastPlayer() {
  var name = localStorage.getItem("name");

  if (!name) {
    return;
  }

  lastPlayerName.textContent = name;

}

submitName.addEventListener("click", function(event) {
  event.preventDefault();

  var name = document.querySelector("#playername").value;

  if (name === "") {
    displayMessage("error", "Name field is blank!");
  } else {
    displayMessage("success", "Submitted successfully!");

    localStorage.setItem("name", name);
    renderLastPlayer();
  }
});



function removeTitle() {
    title.remove();
}

beginQuiz.addEventListener("click", countdown);
beginQuiz.addEventListener("click", askQuestion);
beginQuiz.addEventListener("click", removeTitle);
