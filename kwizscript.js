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

timer();





//Establishing the variables to store answers to then call on to check if answer is right or wrong.
//If its wrong then there will need to be a function to deduct 10seconds from the timer

var bandMembers = "c";

var nameDrummer = "c";

var freddyName = "d";


// //Console log the answers to check its operation

console.log(bandMembers)

console.log(nameDrummer);

console.log(freddyName);


// //Create a function to create the questions.

// If the user gets a question worng the 10 seconds must be taken from the timer. If the timer reaches 0 bedfore the final question is answered then the quiz stops
//and an alert will say "Your knoweldege of Queen needs a bit of a polish!" 

//Calling functions: 
reduceTimer1();
reduceTimer2();


//reduce timer function for Q1 Band Members
function reduceTimer1(bandMembers) {

  if (bandMembers !== "c") {

     alert("Wrong! You just lost 10 seconds!");

//this only gives an alert to the user (no information for the program) and logs it - it doesnt provide the result to be available for the code to then continue to include in functions to dreate the password
      console.log("user got band members wrong");
    
//code needs to know what the result was so return provides the feedback to the program
        return false;

        //need to put function in here to deduct (decrement) timer by 10 seconds
        function getTime(timer) {
            --10
        }

      }
    }


//reduce timer function for Q2 Drummers Name
    function reduceTimer2(nameDrummer) {

      if (nameDrummer !== "c") {
    
         alert("Wrong! You just lost 10 seconds!");
    
    //this only gives an alert to the user (no information for the program) and logs it - it doesnt provide the result to be available for the code to then continue to include in functions to dreate the password
          console.log("user got drummer name wrong");
        
    //code needs to know what the result was so return provides the feedback to the program
            return false;
    
            //need to put function in here to deduct (decrement) timer by 10 seconds
            function getTime(timer) {
                --10
            }
    
          }
        }


//reduce timer function for Q3 Freddy's Name
  function reduceTimer3(freddyName) {

  if (freddyName !== "d") {

     alert("Wrong! You just lost 10 seconds!");

//this only gives an alert to the user (no information for the program) and logs it - it doesnt provide the result to be available for the code to then continue to include in functions to dreate the password
      console.log("user got Freddy's name wrong");
    
//code needs to know what the result was so return provides the feedback to the program
        return false;

        //need to put function in here to deduct (decrement) timer by 10 seconds
        function getTime(timer) {
            --10
        }

      }
    }


//https://www.sitepoint.com/simple-javascript-quiz/

const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


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


//Show the list of questions on the page.
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






// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);













