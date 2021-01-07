//Using the IIFE Immediately Invoked Function Expression

(() => {

//JQUERY to stop all javascript code from running until entire html has loaded
$(document).ready(function(){
    
//JQUERY hiding the showQuestions div and the countTimer div until the StartQuiz button has been pressed
    //Declaring the variables used to callback the quizQuestion array values and append the elements in the form located in the showQuestion div     
    var startQuiz = $("#startQuizBTN");
    var showQuestions = $("#showQuestions");
    var CurrentQuestionIndex = 0;
    var question = $('#question');
    var userSelected = ['choices_1[]','choices_2[]','choices_3[]','choices_4[]'];
    
    var quizQuestions =[
        //Question 1 
         {question_1:"Inside which HTML element do we put the JavaScript?",choices:["<script>","<scripting>","<javascript>","<js>"],answer_1:0},
       
         //Question 2  
         {question_2:"What is the correct JavaScript syntax to change the content of the HTML element '<p>' so it reads 'Javascript is fun'?",choices:["document.getElementByName('p').innerHTML = 'Hello World!';","document.getElementById('demo').innerHTML = 'Javascript is fun!';","#demo.innerHTML = 'Javascript is fun!';","document.getElement('p').innerHTML = 'Javascript is fun';"],answer_2:1},
        
       //Question 3 
         {question_3:"How can you add a comment in a JavaScript?",choices:["<!--This is a comment-->","'This is a comment'","<! This is a comment!>","//This is a comment "],answer_3:3},
         
       //Question 4  
         {question_4:"How does a FOR loop start?",choices:["for (i = 0; i <= 5)","for (i = 0; i <= 5; i++) ","for (i <= 5; i++)","for i = 1 to 5"],answer_4:1},
         
         
       //Question 5  
         {question_5:"Inside which HTML element do we put the JavaScript?",choices:["<script>","<scripting>","<javascript>","<js>"],answer_5:0},
         
       //Question 6  
         {question_6:"Inside which HTML element do we put the JavaScript?",choices:["<script>","<scripting>","<javascript>","<js>"],answer_6:0},
         
       //Question 7  
         {question_7:"Inside which HTML element do we put the JavaScript?",choices:["<script>","<scripting>","<javascript>","<js>"],answer_7:0},
         
        //Question 8 
         {question_8:"What is the correct way to write a JavaScript array?",choices:["var colors = 'red', 'green', 'blue","var colors = (1:'red', 2:'green', 3:'blue')","var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')","var colors = ['red', 'green', 'blue'] "],answer_8:3},
         
        //Question 9 
         {question_9:"What is the correct syntax for an If statement",choices:["if i == 5 then","if i = 5 then","if (i == 5)","if i = 5"],answer_9:2},
         
        //Question 10 
         {question_10:"How to write an IF statement for executing some code if 'i' is NOT equal to 5?",choices:["if (i != 5)","if i =! 5 then","if i <> 5","if (i <> 5)"],answer_10:0}];
    
    var next = "";
    $(startQuiz).click(function(){
    $(quizQuestions).each(function(index, value,){
        console.log(value);
    
        $(quizQuestions).append(question).text(quizQuestions[0], question_1);
        console.log(question);
       
       
        
        
    
    
    
    });
    }); 

$(countdown).show("#countTimer");
//Need to call the Div we are trying to append not a BUTTON
$(startQuiz).append(countdown);

  
});


//Declaring the variables to be used in coding the javascript online quizz

//var answers = document.getElementById('answers')
//var timer = document.getElementById("timer")
//var countdown = document.getElementById('countdown')
//var submitEL = document.getElementById('submitBTN')









//Javascript code for the countdown timer used when the quiz starts by pressing the startQuizBTN
//Declaring the variables for the SVG circle
//add event on the startQuizBTN button to start the countdown timer and show first question of the quiz
startQuizEl = document.addEventListener('click',startTimer);

var full_round_circle = 283;
var firstWarning = 60000;
var endCountdown = 10000;
//Declaring the Countdown_Colors array to be used when called including variable values and limits. Further style settings are in the timer.css file
var Countdown_Colors = {
  info: {
    color: "green"
    
  },
  warning: {
    color: "orange",
    threshold: firstWarning
  },
  alert: {
    color: "red",
    threshold: endCountdown
  }
};
//Declaring variables and valuables to be used for the countdown timer (5 minutes)
var startTime = 300000;
var elapsedTime = 0;
var timeLeft = startTime;
var timerInterval = null;
var PathRemaining = Countdown_Colors.info.color;

//Making changes to the countTimer divide by pushing out html changes via innerHTML DOM
document.getElementById("countTimer").innerHTML = `
          <div class = "countTimer">
          <svg class = "svg_timer" height="100" width="100" preserveAspectRatio = "none" viewBox = "0,30,60,60" xmlns="https://www.w3.org/2000.svg">
          <g class = "timer_clock">
          <circle class = "elapsed_path" cx="50" cy="50" r="40"> </circle>
          <path id = "path-remaining
          full_circle = "283"
          class = "path-remaining ${PathRemaining}"
          dimensions = "
                        M 50, 50
                        m -45, 0
                        a 45,45 0 1,0 90,0
                      a 45,45,0 1,0 -90,0"></path>
            </g>
            </svg>
<span id="countdown" class="countdown">${formatTime(timeLeft)}</span>
</div>
`;


//Calling the startTimer function
startTimer();

//Declaring the onCountDown function to run once the timer has reached 0:00
function onCountdown() {
  clearInterval(timerInterval);
}

//Declaring the startTimer function that sets the timerInterval and calculates remaining time based on other time declared variables
//This function also sets other relevent functions to the timer including CircleDraw and PathRemaining

function startTimer() {
  timerInterval = setInterval(() => {
    elapsedTime = elapsedTime += 1000;
    timeRemaining = startTime - elapsedTime;
    document.getElementById("countdown").innerHTML = formatTime(
      timeRemaining
    )
    setCircleDraw();
    setPathRemaining(timeRemaining);
//Setting a condition through an if statement that if time remaining value is equal to 0 then run the onCountdown function otherwise take another second of the timer
    if (timeRemaining === 0) {
      onCountdown();
      console.log(timeRemaining);
    }
  }, 1000);
}

//Declaring the formatTime function with the time variable. Here we are using the Math.floor formula to work out the minutes and seconds and returning them as formated to string to return to the timer_label
function formatTime(time) {
 var minutes = Math.floor((time/1000/60)<<0);
var seconds = Math.floor((time/1000)%60);
  

if (seconds < 0) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

//Declaring the setPathRemaining with the timeRemaining variable which will draw a path around the circle in a certain colour dependent on meeting certain pre-defined criteria
//Calls the Countdown_colors array and places conditions on them through if statements
function setPathRemaining(timeRemaining) {
  var { alert, warning, info } = Countdown_Colors;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("path-remaining")
      .classList.add(alert.color);
  } else if (timeRemaining <= warning.threshold) {
    document
      .getElementById("path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("path-remaining")
      .classList.add(warning.color);
  }
}

//Declaring the timeCalculation function that works out the value for the variable timeRemaining
function timeCalculation() {
  var timeRemaining = timeLeft / startTime;
  return timeRemaining - (1000 / startTime) * (1000 - timeRemaining);
}

//Declaring the setCircleDraw function to draw a coloured line around the SVG circle dependent on the time remaining
function setCircleDraw() {
  var circleDraw = `${(
    timeCalculation() * full_round_circle
  ).toFixed(0)} 283`;
  document
    .getElementById("path-remaining")
    .setAttribute("full_circle", circleDraw);
}


//Function to call the answers to the answer div
function showAnswers(){
    

}

//eventListener actions for the start and submit buttons declared above
});

