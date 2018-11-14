document.getElementById('date').innerHTML = new Date().toDateString();

function generateRandomNumber() {
  Math.floor(Math.random() * 100);
}
var randomNumber = parseInt(generateRandomNumber())

function guess() {
  var userGuess = parseInt(document.getElementById('user-input').value)
  document.getElementById('result-top-text').innerHTML = "Your last guess was"
  document.getElementById('user-guess').innerHTML = userGuess;
  if (userGuess > randomNumber) {
    document.getElementById('result-bottom-text').innerHTML = "That is too low"
  } else if (userGuess < randomNumber) {
    document.getElementById('result-bottom-text').innerHTML = "That is too high"
  } else if (userGuess === randomNumber) {
    document.getElementById('result-bottom-text').innerHTML = "BOOM!"
  }
}
