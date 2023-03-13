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
// Add prompt asking password character options + length


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// // Add copy button