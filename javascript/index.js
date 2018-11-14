var randomNumber

function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}

randomNumber = generateRandomNumber();

function clearInput() {
  document.getElementById('user-input').value = '';
}

function reset() {
  randomNumber = generateRandomNumber();
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

// function handleChange(input) {
//     if (input.value < 0) {
//       input.value = 0;
//       alert("Please enter a number between 0 and 100");
//     } else if (input.value > 100) {
//       input.value = 100;
//       alert("Please enter a number between 0 and 100");
//     }
// }
