/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can chooose the correct one (choose an adequate data structure here,
    array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array.

4. Select one random question and log it on the console, together with the possible answers (each question should have a number)
    HINT: write a method for Questions objects for this task.

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such
    as you displayed it on  Task 4.

6.  Check if the answer is correct an print to the console whether the answer is correct or not (HINT: write another method for this).

7.  Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't
    interfere with the other programmers code (HINT: we learned a special technique to do exactly that).

--- Expert Level ---

8. After you display the result, display the next random question, so that the game never ends (HINT: write a function for this and call it
    right after displaying the result.)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the
    answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct , add 1 point to the score (HINT: I'm going to use
    the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function()
{
    // 1 ---------------------------------
    function Question(question, answers, correctAnswer)
    {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    // 4 -----------------------Prototype
    Question.prototype.displayQuestion =  function(){
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++){
            console.log(this.answers[i]);
        }
    }
    // 6 --------------------------------
    Question.prototype.checkAnswer = function(userAnswer, callback){
        var score;
        if (userAnswer == this.correctAnswer){
            console.log("Correct answer!");
            score = callback(true);
        }
        else{
            console.log("Wrong answer!");
            score = callback(false);
        }

        this.displayScore(score);
    }

    // 11-------------------------------
    Question.prototype.displayScore = function(score){
        console.log(`Your current score is: ${score}`);
        console.log('---------------------------------');
    }

    // 2 ----------------------------------
    var firstQuestion = new Question("Rising Storm 2: Vietnam or Call of Duty?", ["0: Rising Storm 2", "1: COD"], 0);
    var secondQuestion = new Question("Menudo or Pozole", ["0: Menudo", "1: Pozole"], 1);
    var thirdQuestion = new Question("PS5 or Xbox", ["0: PS5", "1: Xbox"], 0);

    // 3 ----------------------------------
    var questionsArray = [firstQuestion, secondQuestion, thirdQuestion];

    // 10 ---------------------------------
    function calculateScore()
    {
        var score = 0;
        return function(correct)
        {
            if(correct)
            {
                score++;
            }
            return score;            
        }
    }

    var keepScore = calculateScore();

    function randomQuestion()
    {
        // 4 ----------------------------------
        var chosenQ = Math.floor(Math.random() * questionsArray.length); 
        questionsArray[chosenQ].displayQuestion();

        // 5 ----------------------------------
        var userAnswer = prompt("Type the correct answer");
        // 8 & 9------------------------------
        if(userAnswer !== 'exit')
        {
            questionsArray[chosenQ].checkAnswer(parseInt(userAnswer), keepScore);

            randomQuestion();
        }
    }

    randomQuestion();
    
})();