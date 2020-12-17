var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var speedE1 = document.createAttribute("speed");
var poem = document.createAttribute("p")
var poemInterval


var words = poem.split(" ");
console.log(words);
var mainEl = document.getElementById("main");
var timeEl = dcoument.getElementByID("countdown");
var bodyEl = document.getElementByID("div");


var i = 0;
var millisecondsPerWord = prompt("How many milliseconds would you like to have between words");





function prepareRead() {
  // Create the countdown timer.
  var timeLeft = 5;
  var timeInterval = 
}

function speedRead() {
  // Print words to the screen one at a time.
  mainEl.append(bodyEl);
  var poemInterval = setInterval(){
    if (words[i] === undefined){
      clearInterval(poemInterval);

    }
  }
}