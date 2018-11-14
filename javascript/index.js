document.getElementById('date').innerHTML = new Date().toDateString();

function generateRandomNumber() {
  Math.floor(Math.random() * 100);
}
var randomNumber = generateRandomNumber()

function guess() {
  var userGuess = document.getElementById('user-input').value
  document.getElementById('user-guess').innerHTML = parseInt(userGuess);
}
