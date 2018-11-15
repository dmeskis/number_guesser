var randomNumber
// declares global variable to store the random number
var resetButton = document.getElementById("resetButton")
var clearButton = document.getElementById("clearButton")
var rangeButton = document.getElementById('setRangeButton')
// declares variables to store buttons
var minRange = 0
// sets default min range to 0
var maxRange = 100
// sets default max range to 100

function generateRandomNumber() {
   min = Math.ceil(minRange);
   // rounds minrange up
   max = Math.floor(maxRange);
   // rounds maxrange down
   return Math.floor(Math.random() * (max - min + 1)) + min;
   // generates the random number
}

function setGuessingRange() {
  minRange = parseInt(document.getElementById('min-guess').value);
  // sets minrange to user input
  maxRange = parseInt(document.getElementById('max-guess').value);
  // sets maxrange to user input
  if (isNaN(minRange) || isNaN(maxRange)) {
    alert("Please set a valid range.")
    minRange = 0
    maxRange = 100
    return;
  }
  // if user enters any range thats not a number it alerts them and resets to default values
  document.getElementById('rangeAlert').innerHTML = 'Range set!';
  // changes header to let user know the range was successfully set
  document.getElementById('min-guess').disabled = true;
  document.getElementById('max-guess').disabled = true;
  // disables range inputs
  rangeButton.disabled = true;
  // disables range input submit button
  randomNumber = generateRandomNumber();
  // generates number based on new values
}

randomNumber = generateRandomNumber();
// generates randomNumber

function clearInput() {
  document.getElementById('user-input').value = '';
  // clears user guess input
  clearButton.disabled = true;
  // disables clear button after clearing
}

function enableButtons() {
  clearButton.disabled = false;
  resetButton.disabled = false;
}
// helper function to enable buttons

function reset() {
  var minRange = 0
  var maxRange = 100
  // resets default range
  randomNumber = generateRandomNumber();
  // generates a new random number
  document.getElementById('user-guess').innerHTML = '';
  document.getElementById('rangeAlert').innerHTML = 'Set the guessing range or take a guess!';
  document.getElementById('result-top-text').innerHTML = "C'mon, take a guess!";
  document.getElementById('result-bottom-text').innerHTML = "You know you want to.";
  // resets page to default text
  clearInput();
  // clears user guess
  resetButton.disabled = true;
  // disables reset button after resetting
  document.getElementById('min-guess').disabled = false;
  document.getElementById('max-guess').disabled = false;
  // enables user to enter range inputs
  document.getElementById('min-guess').value = '';
  document.getElementById('max-guess').value = '';
  // clears any entry of range inputs
  rangeButton.disabled = false;
  // enables range button
}

function guess() {
  var userGuess = parseInt(document.getElementById('user-input').value)
  // sets users guess to a variable
  var validGuess
  // declares valid guess variable
  if (userGuess > maxRange || userGuess < minRange) {
    // checks if users guess is within valid range
    document.getElementById('user-input').value = '';
    // clears user guess input
    validGuess = false
    // sets validguess to false
    clearButton.disabled = true;
    // disables clear button
    alert(`Please enter a number between ${minRange} and ${maxRange}`);
    // alerts user they need to enter a number in valid range
  } else {
    validGuess = true
    // sets valid guess to true
    document.getElementById('result-top-text').innerHTML = "Your last guess was"
    // changes element to display last guess
    document.getElementById('user-guess').innerHTML = userGuess;
    // displays users last guess
  }

  if (validGuess === true) {
    // only executes if user made a valid guess
    if (userGuess > randomNumber) {
      document.getElementById('result-bottom-text').innerHTML = "That is too high"
      // if users guess was too high lets them know
    } else if (userGuess < randomNumber) {
      document.getElementById('result-bottom-text').innerHTML = "That is too low"
      // if users guess was too low lets them know
    } else if (userGuess === randomNumber) {
      document.getElementById('result-bottom-text').innerHTML = "BOOM!"
      // if user guesses correctly lets them know
      minRange = minRange - 10
      maxRange = maxRange + 10
      // increases difficult by increasing range by 10 in each direction
      randomNumber = generateRandomNumber()
      // generates new random number
    }
  }
  else {
    return;
  }
}

$('.ml1 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: function(el, i) {
      return 70 * (i+1)
    }
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: function(el, i, l) {
      return 80 * (l - i);
    }
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
