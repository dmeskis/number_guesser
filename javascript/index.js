var randomNumber

function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}

randomNumber = generateRandomNumber();

function guess() {
  var userGuess = parseInt(document.getElementById('user-input').value)
  document.getElementById('result-top-text').innerHTML = "Your last guess was"
  document.getElementById('user-guess').innerHTML = userGuess;
  if (userGuess > randomNumber) {
    document.getElementById('result-bottom-text').innerHTML = "That is too high"
  } else if (userGuess < randomNumber) {
    document.getElementById('result-bottom-text').innerHTML = "That is too low"
  } else if (userGuess === randomNumber) {
    document.getElementById('result-bottom-text').innerHTML = "BOOM!"
  }
}

function clear() {
  document.getElementById('user-input').value = '';
}

function handleChange(input) {
    if (input.value < 0) {
      input.value = 0;
      alert("Please enter a number between 0 and 100");
    } else if (input.value > 100) {
      input.value = 100;
      alert("Please enter a number between 0 and 100");
    }
}
