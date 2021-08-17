var timerEl = document.querySelector(".timer");
var beginCountdown = document.querySelector('#generate');

function countdown() {
    var secondsLeft = 300;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if (secondsLeft === 0) {
        clearInterval(timeInterval);
      }
    }, 1000);
}

beginCountdown.addEventListener("click", countdown);