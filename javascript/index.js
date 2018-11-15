var randomNumber
var resetButton = document.getElementById("resetButton")
var clearButton = document.getElementById("clearButton")
var rangeButton = document.getElementById('setRangeButton')
var minRange = 0
var maxRange = 100

function generateRandomNumber() {
   min = Math.ceil(minRange);
   max = Math.floor(maxRange);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setGuessingRange() {
  minRange = parseInt(document.getElementById('min-guess').value);
  maxRange = parseInt(document.getElementById('max-guess').value);
  if (isNaN(minRange) || isNaN(maxRange)) {
    alert("Please set a valid range.")
    minRange = 0
    maxRange = 100
    return;
  }
  document.getElementById('rangeAlert').innerHTML = 'Range set!';
  document.getElementById('min-guess').disabled = true;
  document.getElementById('max-guess').disabled = true;
  rangeButton.disabled = true;
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
  var minRange = 0
  var maxRange = 100
  randomNumber = generateRandomNumber();
  document.getElementById('user-guess').innerHTML = '';
  document.getElementById('rangeAlert').innerHTML = 'Set the guessing range or take a guess!';
  document.getElementById('result-top-text').innerHTML = "C'mon, take a guess!";
  document.getElementById('result-bottom-text').innerHTML = "You know you want to.";
  clearInput();
  resetButton.disabled = true;
  document.getElementById('min-guess').disabled = false;
  document.getElementById('max-guess').disabled = false;
  document.getElementById('min-guess').value = '';
  document.getElementById('max-guess').value = '';
  rangeButton.disabled = false;
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
      minRange = minRange - 10
      maxRange = maxRange + 10
      randomNumber = generateRandomNumber()
    }
  }
  else {
    return;
  }
}
