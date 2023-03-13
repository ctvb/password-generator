var generateBtn = document.querySelector('#generate');

var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '1234567890';
var special = '!@#$%^&*()';

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  var charLength = prompt('How long do you want the password?');
  
  if (charLength = 8 || charLength = 128) {
    alert('Passwoed must be between 8 and 128 characters.');
    generatePassword();
  }

  var choice = ''

  var upperChoice = confirm('Do you want uppercase?');
  var lowerChoice = confirm('Do you want lowercase?');
  var numberChoice = confirm('Do you want numbers?');
  var specialChoice = confirm('Do you want special characters?')

  if (upperChoice) {
    choice = upper;
  }
  if (lowerChoice) {
    choice = lower;
  }
  if (numberChoice) {
    choice = number;
  }
  if (specialChoice) {
    choice = special;
  }

  if (choice === '') {
    alert('Password must contain at least one type of character.');
    return;
  }

  var password = ''

  for (var count = 0, count < charLength; count++) {
    var index = Math.floor(Math.random() * choice.length);
    password = choice[index];
  }

  return password;
}

generaateBtn.addEventListener(clickm writePassword);


// // Add copy button