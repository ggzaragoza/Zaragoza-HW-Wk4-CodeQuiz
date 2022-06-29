var timerEl = document.querySelector(".timer");
var beginQuiz = document.querySelector('#begin');
var quiz = document.getElementById('quiz');
var title = document.getElementById('titlescreen');

const allQuestions = [
    {
        ask: "HTML gives body to a webpage. What does HTML stand for?",
        choices: [
            {text: "HyperText Markup Language", correct: "true"},
            {text: "High Traffic Messaging Lexicon", correct: ""},
            {text: "Holistically Truncated Mapping Library", correct: ""},
            {text: "Hot Tamales, My Love", correct: ""},
        ]
    },
    {
        ask: "We need a way for text on our page to stand out. What tag can we use for this?",
        choices: [
            {text: "<em>", correct: ""},
            {text: "<bold>", correct: ""},
            {text: "<strong>", correct: "true"},
            {text: "<lookatme>", correct: ""},
        ]
    },
    {
        ask: "Now that we're looking at our HTML, which is not a section or element that can make up our page?",
        choices: [
            {text: "<head>", correct: ""},
            {text: "<shoulder>", correct: "true"},
            {text: "<body>", correct: ""},
            {text: "<footer>", correct: ""},
        ]
    },
    {
        ask: "Times New Roman on a white background is ugly. What language primarily be used to style HTML?",
        choices: [
            {text: "CSS", correct: "true"},
            {text: "Python", correct: ""},
            {text: "JavaScript", correct: ""},
            {text: "Catalan", correct: ""},
        ]
    },
    {
        ask: "She's got the looks but our page is cluttered. What can we use to reorganize our page in different layouts?",
        choices: [
            {text: "Media queries can set new specifications for elements when viewing our page at different browser widths", correct: ""},
            {text: "Turning our device sideways can help see things from a new perspective", correct: ""},
            {text: "Flex containers can automatically create new rows of elements on our page", correct: ""},
            {text: "Choices 1 and 3 are both useful", correct: "true"},
        ]
    },
    {
        ask: "Various kinds of positioning properties will help us determine how elements are placed on our page. Which is not a kind of positioning property?",
        choices: [
            {text: "absolute", correct: ""},
            {text: "relative", correct: ""},
            {text: "prime", correct: "true"},
            {text: "fixed", correct: ""},
        ]
    },
    {
        ask: "JavaScript adds event-driven functions to our page. What can be added in our code to trigger these functions?",
        choices: [
            {text: "Situation monitors", correct: ""},
            {text: "Thing scouters", correct: ""},
            {text: "Circumstance hearers", correct: ""},
            {text: "Event listeners", correct: "true"},
        ]
    },
    {
        ask: "Variables can help store values in our functions. A variable assigned multiple values can be called a what?",
        choices: [
            {text: "A table", correct: ""},
            {text: "An array", correct: "true"},
            {text: "A library", correct: ""},
            {text: "The grocery list", correct: ""},
        ]
    },
    {
        ask: "JavaScript can help us navigate our HTML and create new elements with events. Which is not a way to traverse or alter an HTML document?",
        choices: [
            {text: "motherlode", correct: "true"},
            {text: "querySelector", correct: ""},
            {text: "getElementById", correct: ""},
            {text: "appendChild", correct: ""},
        ]
    },
    {
        ask: "We built our page! What command can we use from our local computer to send our files to a remote repository for other developers to view?",
        choices: [
            {text: "git push", correct: "true"},
            {text: "git shove", correct: ""},
            {text: "git on", correct: ""},
            {text: "git out", correct: ""},
        ]
    },
];

var secondsLeft = 60;
var userScore = 0;
var questionNumber = 0;
var question = document.createElement("h2");

function countdown() {
    var timer = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timer);
            quiz.remove();
            timerEl.remove();
            endTitle();
        };
    }, 1000);     
       
    if (questionNumber > allQuestions.length - 1) {
        clearInterval(timer);
        quiz.remove();
        timerEl.remove();
        endTitle();
    };
};

function buildFirstQuestion() { 
    question.textContent = allQuestions[questionNumber].ask;
    quiz.appendChild(question);

    allQuestions[questionNumber].choices.forEach((choice, index) => {
        var btnChoice = document.createElement("button");
        btnChoice.textContent = choice.text;
        btnChoice.value = choice.correct;
        btnChoice.setAttribute("class", `btn-choice btn-num-${index}`);
        quiz.appendChild(btnChoice);
    });

    var answerButtons = document.getElementsByClassName("btn-choice");
    Array.from(answerButtons).forEach((answerButton) => {
        answerButton.addEventListener("click", nextQuestion);
    });
};

function nextQuestion() {
    if (this.value) {
        userScore++;
        // console.log(userScore);
    };

    if (!this.value) {
        secondsLeft = secondsLeft - 5;
    } else if (!this.value && secondsLeft < 5) {
        quiz.remove();
        timerEl.remove();
        endTitle();
        return
    };

    if (questionNumber < allQuestions.length - 1) {
        questionNumber++;
        console.log("This is question number " + (questionNumber + 1));
    } else {
        quiz.remove();
        timerEl.remove();
        endTitle();
        return
    };

    question.textContent = allQuestions[questionNumber].ask;
    allQuestions[questionNumber].choices.forEach((choice, index) => {
        var choiceBtn = document.getElementsByClassName(`btn-num-${index}`)
        choiceBtn[0].textContent = choice.text;
        choiceBtn[0].value = choice.correct;
    }); 
};

var endScreen = document.getElementById("endscore");
var finishedWith = document.createElement("h3");
var formArea = document.getElementById("form");
var lastPlayer = document.getElementById("lastplayer");
var playerName = document.querySelector("#playername");
var submitName = document.querySelector("#submit");
var msgDiv = document.querySelector("#message");
var lastPlayerName = document.querySelector("#last-player-name");

function endTitle() {
    var scoreText;
    var timeText;

    endScreen.setAttribute("style", "display: block");
    lastPlayer.setAttribute("style", "display: block");
    // finishedWith.innerHTML = "You answered  with " + secondsLeft + " seconds left.";
    endScreen.appendChild(finishedWith);
    formArea.setAttribute("style", "display: block");

    if (userScore === 1) {
        scoreText = "You answered 1 question correctly with ";
    } else {
        scoreText = `You answered ${userScore} questions correctly with `; 
    }

    if (secondsLeft === 1) {
        timeText = "1 second left.";
    } else if (secondsLeft <= 0) {
        timeText = "0 seconds left.";
    } else {
        timeText = `${secondsLeft} seconds left.`;
    };

    // finishedWith.textContent = `You answered ${userScore} questions correctly with ${secondsLeft} seconds left.`;
    finishedWith.textContent = scoreText.concat(timeText);
};

renderLastPlayer();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
};

function renderLastPlayer() {
  var name = localStorage.getItem("name");

  if (!name) {
    return;
  }

  lastPlayerName.textContent = name;
};

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
};

beginQuiz.addEventListener("click", countdown);
beginQuiz.addEventListener("click", buildFirstQuestion);
beginQuiz.addEventListener("click", removeTitle);