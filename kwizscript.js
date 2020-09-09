
//I GOOGLED AND FOUND: //https://www.sitepoint.com/simple-javascript-quiz/ . Ive used this to use as an example and am manipulating it in an attempt to get it to work.


//VARIABLES
//Establishing the variables to store the correct answer to each question.
//If its wrong then there will need to be a function to deduct 10seconds from the timer.

var bandMembers = "c";

var nameDrummer = "c";

var freddyName = "d";


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


//these are the questions - not sure yet how to connect to the other code
const myQuestions = [
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
    question: "What is Freddy Mercury's birth name?",
    answers: {
      a: "Harold Isa CoolDude",
      b: "Farsorah Bulsara",
      c: "Freddy Brown",
      d: "Freddy Bulsara"
    },
    correctAnswer: "d"
  }
];



//FUNCTIONS

//Trying a timer option form stack overflow: https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer.
//I think it was an up timer so I changed the "+sec' to "-sec". I also have changed the rest that was part of the original if to be "stop". 
function timer(){
  var sec = 30;
  var timer = setInterval(function(){
      document.getElementById('safeTimerDisplay').innerHTML='00:'-sec;
      sec--;
      if (sec < 0) {
          stop(timer);
      }
  }, 1000);
}

//FUNCTION TO CREATE QUIZ QUESTIONS
//Need to write a function to create the questions.


//FUNCTIONS TO CHECK ANSWERS AND IF CORRECT MOVE TO NEXT QUESTION, IF NOT THEN DEDUCT 10 SECONDS FROM TIMER AND THEN MOVE TO NEXT QUESTION IF TIMER GREATER THAN ZERO
// If the user gets a question wrong, 10 seconds must be taken from the timer. If the timer reaches 0 before the final question is answered then the quiz stops

function answerQ1(bandMembers) {
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
    
  
function answerQ2(nameDrummer) {
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
    

function answerQ3(freddyName) {
  if (freddyName === "d") {
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
}
 //FUNCTION TO STOP THE QUIZ IF THE TIMER REACHES ZERO
 //this function needs to keep running in the background???
 function timesUp(){


 }   

//Show the list of questions on the page - need a function to build the quiz - the 3 questions and options for answers.
function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }


// add this question and its answers to the output
output.push(
    `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join('')} </div>`
  );
}
);

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}


// on submit, show results...the results for this has to be the final time - viz how many seconds left
submitButton.addEventListener('click', showResults);



//CALLING FUNCTIONS
// Call the function to create the quiz questions
buildQuiz(myQuestions);

//call the timer
timer();

//Calling reduce timer by 10 seconds functions: 
reduceTimer1();
reduceTimer2();
reduceTimer3();







// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);













