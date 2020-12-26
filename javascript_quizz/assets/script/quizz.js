//Declaring the variables to be used for the online quiz
var questions = document.getElementById('questions')
var answers = document.getElementById('answers')
var quizTimer = document.getElementById('timer')
var countdown = document.getElementById('countdown')


var submitEl = document.querySelector('#submitBTN')
var startQuizEl = document.querySelector('#startQuizBTN')

/*Possibly need to create an array to hold the question array for the length of questions I have??? */

//Declaring the quiz array
var javaQuiz = 
      [
//Question 1
        {
          question_1: "Inside which HTML element do we reference JavaScript",
          choices_1: ["<script>", "<javascript>", "<js>", "<title>"],
          answer_1: 0
        },
	
//Question 2
        {
          question_2: "What is the correct syntax for referring to an external script called 'xxx.js'?",
          choices_2: ["script = xxx.js", "<script href='xxx.js'>", "<script src='xxx.js'>","<script name='xxx.js'>"],
          
	  answer_2: 2
        },

//Question 3
        {
          question_3: "What is the correct JavaScript syntax to change the content of the '<p>' HTML element using DOM",
          choices_3: ["document.getElementById('test').innerHTML = 'This is a test of your javascript knowledge'",
	            "document.getElement('p').innerHTML = 'This is a test of your javascript knowledge'",
		    "document.getElementByName('p').innerHTML = 'This is a test of your javascript knowledge'",
		    "#demo.innerHTML = 'This is a test of your javascript knowledge'"],
          
         answer_3: 0
        },

//Question 4
	{
          question_4: "How do you write 'Javascript Coding is fun!' in an alert box?",
          choices_4: ["alert('Javascript Coding is fun!');", "msg('Javascript Coding is fun!')",
		  "alertBox('Javascript Coding is fun!');", "msgBox('Javascript Coding is fun!');"],
          
	answer_4: 0
        },

//Question 5
        
        {
          question_5: "How to write an IF statement in JavaScript?",
          choices_5: ["if i = 5 then","if i != 5", "if (i == 5) ", "if i == 5 then"],
          
	  answer_5: 2
        },
//Question 6

	{
          question_6: "How do you call a function named 'writeAnswer'?",
          choices_6: ["call writeAnswer()","writeAnswer()","call function writeAnswer()"],
          
	answer_6: 1
        },

//Question 7
	{
          question_7: "How to write an IF statement for executing some code if 'i' is NOT equal to 21?",
          choices_7: ["if i =! 21 then","if i == 21","if i <> 21", "if (i != 21)"],
          answer_7:3
        },

//Question 8
	{
          question_8: "What is the correct way to write a JavaScript array?",
          choices_8: ["var colors = (1:'red', 2:'green', 3:blue')",
		    "var colors = ['red', 'green', 'blue']",
		    "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
		    "var colors = 'red', 'green', 'blue'"],
          
	 answer_8:1
        },

//Question 9
	{
          question_9: "How do you declare a JavaScript variable?",
          choices_9: ["var carName; ","v carName;","carName+=variable", "variable carName;"],
          answer_9:0
        },

//Question 10	
	{
          question_10: "Which event occurs when the user clicks on an HTML element?",
          choices_10: ["onmouseover","onchange","onclick ", "onmouseclick"],
          answer_10:2
        },


];
var quizQuestions = arrayQuestions (question_1, question_2, question_3, question_4, question_5, question_6, question_7, question_8, question_9, question_10);

//This is the function that will store the java script quiz questions and add them to the question section of the html page in sequential order
//until the timer has run out or all questions have been answered
function quizQuestions(){
//randomise the questions
        var showQuestion =[];
        quizQuestions.sort(() => Math.random()* arrayQuestions.length);
        shuffle(arrayQuestions);
        return showQuestion;
        var userChoice = '';
        //this is where a for loop will go

}
//This is the function that will show the answers to the quiz questions
function showAnswers(){
        var showAnswer = [];
//radio button dependent on choice from quizQuestions function above.
//Need to store user choices in variable userChoice


}

//this should start the countdown and should call the quizTimer function and preceding functions to display timer while the quiz is going on
function setcountdown() {
        countdownEl.textContent = timer;
      }
      
      startQuizEl.addEventListener("click", function() {
        timer++;
        setcountdown();
      });
      
//This is the timer function that will show a countdown of timem left to complete the quiz
function quizTimer(){
        return formatMinutes, formatSeconds;
        
//declaring time variables to be used for countdown clock timer
var secondsRemain = 0
var secondsinTotal = 0
var lapsedSeconds = 0
var minutesRemain = 0
var formatMinutes = 0
var formatSeconds = 0

//where does the countdown come from ? - Need to set countdown to 5:00
var countdown = 0


while (countdown != 0) {
getTimePreferences();
 
// These two functions are just for making sure the numbers look nice for the html elements
function getFormatMinutes() {
  //
  var secondsRemain = secondsinTotal - lapsedSeconds;

  var minutesRemain = Math.floor(secondsRemain / 60);

  var formatMinutes;

  if (minutesRemain < 10) {
    formatMinutes = "0" + minutesRemain;
  } else {
    formatMinutes = minutesRemain;
  }

  return formatMinutes;
}

function getFormatSeconds() {
  var secondsRemain = (secondsinTotal - lapsedSeconds) % 60;

  var formatSeconds;

  if (secondsRemain < 10) {
    formatSeconds = "0" + secondsRemain;
  } else {
    formatSeconds = secondsRemain;
  }

  return formattedSeconds;
}
}

}
//When submit button is pressed - answers to the quizz questions will be shown
submitEl.addEventListener('click',showAnswers);
