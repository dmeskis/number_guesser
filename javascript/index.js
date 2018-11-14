var randomNumber
var resetButton = document.getElementById("resetButton")
var clearButton = document.getElementById("clearButton")
var minRange = 0
var maxRange = 100

function generateRandomNumber() {
   min = Math.ceil(minRange);
   max = Math.floor(maxRange);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setGuessingRange() {
  minRange = parseInt(document.getElementById('min-guess').value)
  maxRange = parseInt(document.getElementById('max-guess').value)
  document.getElementById('rangeAlert').innerHTML = 'Range set!'
  randomNumber = generateRandomNumber();
}

randomNumber = generateRandomNumber();

function clearInput() {
  document.getElementById('user-input').value = '';
  clearButton.disabled = true;
}

function enableButtons() {
  clearButton.disabled = false;
  resetButton.disabled = false;
}

function reset() {
  randomNumber = generateRandomNumber();
  document.getElementById('user-guess').innerHTML = '';
  document.getElementById('result-top-text').innerHTML = "C'mon, take a guess!";
  document.getElementById('result-bottom-text').innerHTML = "You know you want to.";
  clearInput();
  resetButton.disabled = true;
}

function guess() {
  var userGuess = parseInt(document.getElementById('user-input').value)
  var validGuess
  if (userGuess > maxRange || userGuess < minRange) {
    document.getElementById('user-input').value = '';
    validGuess = false
    clearButton.disabled = true;
    alert(`Please enter a number between ${minRange} and ${maxRange}`);
  } else {
    validGuess = true
    document.getElementById('result-top-text').innerHTML = "Your last guess was"
    document.getElementById('user-guess').innerHTML = userGuess;
  }

  if (validGuess === true) {
    if (userGuess > randomNumber) {
      document.getElementById('result-bottom-text').innerHTML = "That is too high"
    } else if (userGuess < randomNumber) {
      document.getElementById('result-bottom-text').innerHTML = "That is too low"
    } else if (userGuess === randomNumber) {
      document.getElementById('result-bottom-text').innerHTML = "BOOM!"
    }
  }
  else {
    return;
  }
}
