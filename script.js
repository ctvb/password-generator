var generateBtn = document.querySelector('#generate');

  // THESE GIVE OPTIONS FOR WHAT TYPE OF CHARACTERS THE PASSWORD CONTAINS
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '1234567890';
var special = '!@#$%^&*()';

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// THIS GENERATES A PROMPT THAT ASKS THE USER HOW LONG THEY WANT THEIR PASSWORD
function generatePassword() {
  var charLength = prompt('How long do you want the password?');
  
  // THIS IF STATEMENT LIMITS THE PASSWORDS CHARACTER LENGTH TO BE BETWEEN 8 AND 128
  if (charLength < 8 || charLength > 128) {
    alert('Password must be between 8 and 128 characters.');
    return generatePassword();
  }

  // THIS MAKES THE USERS CHOICE INTO A STRING
  var choice = '';

  // THESE HAVE THE USER CONFIRM WHAT TYPES OF CHARACTERS THEY WANT IN THEIR PASSWORD
  var upperChoice = confirm('Do you want uppercase?');
  var lowerChoice = confirm('Do you want lowercase?');
  var numberChoice = confirm('Do you want numbers?');
  var specialChoice = confirm('Do you want special characters?');

  // THESE IF STATEMENTS WILL TRACK THE USERS CHOICE AND GIVE A MESSAGE THAT THEY MUST PICK AT LEAST ONE CHARACTER TYPE IF THEY PICKED NONE
  if (upperChoice) {
    choice += upper;
  }
  if (lowerChoice) {
    choice += lower;
  }
  if (numberChoice) {
    choice += number;
  }
  if (specialChoice) {
    choice += special;
  }

  if (choice === '') {
    alert('Password must contain at least one type of character.');
    return;
  }

  // THIS VARIABLE TURNS THE PASSWORD INTO A STRING
  var password = '';

  for (var count = 0; count < charLength; count++) {
    var index = Math.floor(Math.random() * choice.length);
    password += choice[index];
  }

  return password;
}

// THIS LINE OF CODE GIVES THE BUTTON FUNCTIONALITY
generateBtn.addEventListener('click', writePassword);
