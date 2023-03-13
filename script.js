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

// Add prompt asking password character options + length


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

<input type = "btn" onclick= "prompt('jbjbhj');" value = "Generate Password" />

var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//ask for character type
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var charTypeLower = charType.toLowerCase();
  if (charTypeLower === "lowercase") {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if (charTypeLower === "uppercase") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (charTypeLower === "numeric") {
    charSet = "0123456789";
  } else if (charTypeLower === "special") {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
alert(generatePassword());

//make password appear in display box
document.getElementById("display").value = password;

//function to copy password to clipboard
function copyPassword() {

  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard!");
}

// // Add copy button