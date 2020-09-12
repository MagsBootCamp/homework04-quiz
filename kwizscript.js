
//HOMEWORK WEEK 4: QUIZ

//Late Note: You will see that Lines 159 onwards are blocked out. These lines represent my first attempt.
//Lines 11 - 153 are my final attempt as I think my first attempt was way too complex.
//I didnt complete this to a point where it functioned but I hope that through my commentary that you can see that I knew what was needed but struggled to code it in time
//as I've spent a very long time and essentially run out of time :(



//FUNCTIONS

//FUNCTION FOR TIMER
//I used a timer I found on Stack Overflow:
//https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
//it was set for 10 minutes so I simply adjusted the varfiveMinutes to be 60 * 1 rather than 60 * 10.

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 1,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};



//FUNCTION TO CREATE QUIZ QUESTIONS
//Need to write a function to create the questions.



   
    
//Function answerQ1: This function runs if the button clicked is correct. 
//Then need to automatically go to question 2 ....but only if timer >0 (still working on how to code that).
function answerQ1() {
  alert("Youre right - next question!");
  //record to cosole to check it works
    console.log("user got it wrong");
}

//Function answerQ1W: This function runs if the button clicked is incorrect. 
//Need to put another function within answerQ1W to deduct (decrement) timer by 10 seconds and then tell it to
//go to the next question only if timer>0 (still working on how to code that).
// Something like....
//function getTime(timer) { --10??? }Dont know how to do that.
function answerQ1W() {
  alert("Youre wrong - lose 10 seconds!");
  //record to cosole to check it works
    console.log("user got it right");
}


//FUNCTION TO STOP THE QUIZ IF THE TIMER REACHES ZERO
 //This function needs to keep running but stop the quiz when time = 0.
 //So it needs to put up an alert and not allow the user to click on the question that is on the page.
 //I think that I need to put this in the Timer function.....but not sure.
 //Could have it a separate function that stops the Timer, says "Times Up" with a button that says "Take the Quiz again?"
 //and that button would have the url to the questions page so that it can start again.

 function timesUp(){}

//FUNCTION TO ENTER HIGH SCORE
// The only situation when a high score is recorded is when:
// (a) Question 3 has been answered (you cannot get a high score if answer anything < the 3 questions), and
// (b) the full answerQ1 or answerQ1W is complete because if the answer is wrong it needs to take 10 seconds off which is part of answerQ1W.
// (c) the Timer is > 0 - and it will be unless the timer happens to hit 0 just prior to the Click of the user on Q3 answer....dont know how
//to code that circumstance if its micro-seconds between timer reaching zero and the user clicking!
 
//Therefore we need a function that will take the time when Question 3 has been answered and the answer function has executed. Viz: function getEndScore.
//The result must be returned to the High Score page. A FORM needed that user enters name and when user clicks SUBMIT
//a function will execute and assign that name to the score. Viz function assignScore.
//then need a button and assign a function to get the users name and their score. Viz function getMyScore


function getEndScore(){}
function assignScore(){}
function getMyScore(){}

//VARIABLES
//Need variable for the high score requirements. Viz:
// (1) let myName = (the result from the submission of the FORM result where user entered their name)
// (2) let endScore = (the time at end of Q3...can be a string as no arithmetic function will be performed on it. Is the result of function getEndScore)
// (3) let myScore = (the result of the function that adds getEndScore + the variable myName)


//USING BUTTONS AS THE ANSWERS AND ADDING EVENT LISTENERS FOR THOSE BUTTONS
// Use event handler to create buttons to create answers?
//Question 1 buttons - How many ban members in Queen?

submitButton2.addEventListener ("click", answerQ1W);
    
    console.log("user got band members wrong");
    

submitButton8.addEventListener ("click", answerQ1W);
    
    console.log("user got band members wrong");

    
submitButton4.addEventListener ("click", answerQ1);
    
    console.log("user got band members right");
  

//Question 2 buttons - Name of drummer
submitButtonDean.addEventListener ("click", answerQ1W);
    
  console.log("user got drummer wrong");


submitButtonRabbit.addEventListener ("click", answerQ1W);
  
  console.log("user got drummer wrong");
  

submitButtonTaylor.addEventListener ("click", answerQ1);
  
  console.log("user got drummer right");



//Question 3 buttons - Real surname of Freddy Mercury
submitButtonDude.addEventListener ("click", answerQ1W);
  
  console.log("user got Freddy wrong");


submitButtonBulsara.addEventListener ("click", answerQ1);
  
  console.log("user got Freddy right");


submitButtonBrown.addEventListener ("click", answerQ1W);
  
  console.log("user got Freddy wrong");



//CALL FUNCTIONS 
  answerQ1();
    
  answerQ1W();


//CREATION OF THE QUESTIONS USING ONE HTML PAGE ONLY. THIS NEEDS EACH QUESTION TO APPEAR SEPARATELY AND SEQUENTIALLY FROM Q1 THROUGH TO Q3 
//(UNLESS TIMER = 0, WHICH STOPS EVEYTHING). 
//I think I need to have a function that replaces Q1 with Q2 and then Q2 with Q3 once a question:
// (a) has been answered
// (b) has deducted 10 seconds from timer if the answer was wrong, and if
// (c) time remaining is > 0
//Then I can use the same functions, that is answerQ1 and answerQ1W as just runs again on the "active" questions on the page.
//I think this needs "document.body.innerHTML" operations but I cannot work out how to do that.
//I think I need that to run at the end of Q1 and Q2.
//I've set it up that the High Scores is a different html page.
//Not sure if I could have done the document inner.HTML again to clear the page and create the High Scores elements??





 //MY FIRST ATTEMPT THAT I ABANDONED IS BELOW 

//VARIABLES
//This variables and constants and establishing the variables to store the correct answer to each question.
//If its wrong then there will need to be a function to deduct 10seconds from the timer.

/* var bandMembers = "4";

var nameDrummer = "Roger Taylor";

var freddyName = "Bulsara";


//Console log the answers to check its operation

console.log(bandMembers)

console.log(nameDrummer);

console.log(freddyName);


//not sure yet how these work

const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}
 */

//These are the questions - I thought this would be best and then check if the answer was T ot F but wasnt sure  how to code.
//I'VE BLOCKED THIS OUT AS NOW THAT i'VE THOUGHT ABOUT IT i DONT THINK THINS WAS THE BEST WAY. i'M GOING TO JUST USE BUTTONS WITH THE ANSWERS ATTACHED.
//Refer later.
/* const myQuestions = [
    {
      question: "How many members did Queen have?",
      answers: {
        a: "2",
        b: "8",
        c: "4"
      },
      correctAnswer: "c"
    },
    {
        question: "Who is Queen's drummer?",
        answers: {
          a: "Roger Dean",
          b: "Roger Rabbit",
          c: "Roger Taylor"
        },
        correctAnswer: "c"
  },
  {
    question: "What is Freddy Mercury's real surname?",
    answers: {
      a: "CoolDude",
      b: "Bulsara",
      c: "Brown",
    },
    correctAnswer: "b"
  }
];
 */

 //FUNCTIONS TO CHECK ANSWERS AND IF CORRECT MOVE TO NEXT QUESTION, IF NOT THEN DEDUCT 10 SECONDS FROM TIMER AND THEN MOVE TO NEXT QUESTION IF TIMER GREATER THAN ZERO
// Late Note: All the work below I decided not to use as the code above I wrote after this code below as I thought the code below made it more complex.


//If the user gets a question wrong, 10 seconds must be taken from the timer. If the timer reaches 0 before the final question is answered then the quiz stops

/* function answerQ1(bandMembers) {
  if (bandMembers === "c") {
    alert("Youre right!");
    //record to cosole to check it works
      console.log("user got band members right");
    //code needs to know what the result was so return provides the feedback to the program
        return true;
    //then go to question 2 only if timer>0 (still working on how to code that)
    
  } 
  else {
      alert("Wrong! You just lost 10 seconds!");
    //code needs to know what the result was so return provides the feedback to the program
        return false;
     //need to put function in here to deduct (decrement) timer by 10 seconds and then tell it to go to the next question
     function getTime(timer) {
      --10
  }
    //then go to question 2 only if timer>0 (still working on how to code that)

}
}
answerQ1(bandMembers);
   */


/* function answerQ2(nameDrummer) {
  if (nameDrummer === "c") {
    alert("Youre right!");
    //record to cosole to check it works
      console.log("user got drummer right");
    //code needs to know what the result was so return provides the feedback to the program
        return true;
    //then go to question 2 only if timer>0 (still working on how to code that)
    
  } 
  else {
      alert("Wrong! You just lost 10 seconds!");
      //record to cosole to check it works
      console.log("user got drummer wrong");
    //code needs to know what the result was so return provides the feedback to the program
        return false;
     //need to put function in here to deduct (decrement) timer by 10 seconds and then tell it to go to the next question
     function getTime(timer) {
      --10
  }
    //then go to question 3 only if timer>0 (still working on how to code that)

}
}
  answerQ2(nameDrummer);
 */


 
//* Function answerQ3(freddyName) {
/*   if (freddyName === "d") {
    alert("Youre right!");
    //record to console to check it works
      console.log("user got Freddy right");
    //code needs to know what the result was so return provides the feedback to the program
        return true;
    //then stop timer and returns that against variable 'results'
    
  } 
  else {
      alert("Wrong! You just lost 10 seconds!");
      //record to cosole to check it works
      console.log("user got freddy wrong");
    //code needs to know what the result was so return provides the feedback to the program
        return false;
     //need to put function in here to deduct (decrement) timer by 10 seconds and then store the time against 'results'
     function getTime(timer) {
      --10
      //then store the time in 'results'
  }
  }
 */
/* answerQ3(freddyName)
 */

