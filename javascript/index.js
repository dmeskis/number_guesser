var randomNumber
var guessButton = document.getElementById("guessButton")
var clearButton = document.getElementById("clearButton")

function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}

randomNumber = generateRandomNumber();

function clearInput() {
  document.getElementById('user-input').value = '';
}

function reset() {
  randomNumber = generateRandomNumber();
  document.getElementById('user-guess').innerHTML = '';
  document.getElementById('result-top-text').innerHTML = "C'mon, take a guess!";
  document.getElementById('result-bottom-text').innerHTML = "You know you want to.";
  clearInput();
}

function guess() {
  var userGuess = parseInt(document.getElementById('user-input').value)
  var validGuess
  if (userGuess > 100 || userGuess < 0) {
    document.getElementById('user-input').value = '';
    validGuess = false
    alert("Please enter a number between 0 and 100");
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
