CODE QUIZ

Please note that the extensive notes that show my flow of thought as to what was needed to create and make the quiz run are contained within the Javascript file which I have named kwizscript.js at https://github.com/MagsBootCamp/homework04-quiz/blob/master/kwizscript.js
So this README is brief.
I have 3 html files:

1. The home page for the Quiz. https://github.com/MagsBootCamp/homework04-quiz/blob/master/Index.html. This page has a button that takes you to the questions page. Please start at this page. 

2. Questions page. https://github.com/MagsBootCamp/homework04-quiz/blob/master/kwizquestions.html. This page has all three questions showing and the Timer that counts down from 60 seconds. It starts stright away as I have not written a function that starts the timer on the click of the answer to Q1. (I've run out of time). There is a problme with my JS file that I cant work out - it affects this page when it first loads. Lines 55 and 56 are the functions I have created to run the question responses but the alerts run once before the page loads and I'm not sure why. Please click ok twice to get through this so that you see the questions load.

3. High Scores Page. https://github.com/MagsBootCamp/homework04-quiz/blob/master/kwizhighscore.html. This page should show the score that the user got and a form for the user to type in their name and click a submit button. (Again I've run out of time).

I think that I have shown in the notes that I knew what was needed, but again as a person with zero coding experience before starting this course, I have stuggled to be a proficient coder due to the 14 hours contact time, extra 20 hours required plus the self learning and practice to be able to code this effectively in limited time.

My JS file is named: kwizscript.js at https://github.com/MagsBootCamp/homework04-quiz/blob/master/kwizscript.js


STARTING POINT
I have decided to use the previous homework in week 2 - being Bootstrap - as the base html for my homepage for the quiz. 
I did this because it has the containers and is responsive to multiple screen sizes, so I did not have to reinvent the wheel.
I have managed to change this to work - being:
A home page introducing the quiz, that has buttons that link to the high scores and quiz pages.
I think that this might not be the way to do it but just want to show I understand the steps as per my flow chart/pseudo code.
The pseudo code/flow chart is in multiple jpg files:
<img src="pseudo1pages.jpg" alt="page 1 of pseudo/flowchart">
<img src="pseudo2pages.jpg" alt="page 2 of pseudo/flowchart">
<img src="pseudo3quizflow.jpg" alt="page 3 of pseudo/flowchart">
<img src="pseudo4quizflowmore.jpg" alt="page 4 of pseudo/flowchart">
<img src="pseudo5summaryofneeds.jpg" alt="page 5 of pseudo/flowchart">



THE PROCESS OF ATTEMPTING TO CREATE THE QUIZ
I dont think I'm doing this the right way but trying to show that I undestand what needs to be done albeit I am struggling to put it all together.

I decided to Google timers and also quizzes to get some help. I have acknowledged the timer code I used in the Java Script file.

I recognised the need to use document.body.innerHTML to replace the questions - and do this after Q1 and Q2 (I only did 3 questions) had been completed but only if the timer >0
I am using the website Codecademy https://www.codecademy.com/learn:
I saw examples reassigning the inner HTML of the body element to something else:
e.g.    document.body.innerHTML = 'The cat loves the dog.'; replaced previous tect on the webpage.
But I have simply run out of time.






