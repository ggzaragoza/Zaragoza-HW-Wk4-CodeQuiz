# Zaragoza-HW-Wk4-CodeQuiz

In this repository you will find files for a simple quiz application. The quiz is launched by clicking a start ("Let's Go!") button; this in turn sets a timer of 60 seconds
for a user to answer 10 questions as quickly as they can. Once the last question is answered, or if the timer runs out, an end screen will display with the number of seconds
on the timer remaining. This is to act as the player's score, and the player has the option to input their name for display upon completion of the quiz by a subsequent player.

Due to time constraints, some features are not yet complete, per the homework criteria. Finding a solution to linking wrong answer choices to increased time off the clock was
a considerable challenge; there are, however, lines of code that allow intervals of ten seconds to be removed from the timer after clicking any answer choice, whether right or
wrong. Various console.log functions have also revealed in the browser console that the answer choice buttons do indeed carry boolean "true/false values," corresponding to
the validity of each answer per question.