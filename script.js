// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// var button = document.clickButton("click");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// function generatePassword() {
//   var length = 8, 
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
//       retVal = "";
//       button = prompt("How many characters?");
//   for (var i = 0, n = charset.length; i < length, ++i;) {
//     retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }



// if (sign.toLowerCase() === "scorpio") {
//   alert("Wow! I'm a Scorpio too!");
// }

// // there are many ways to use the prompt feature
// sign = window.prompt(); // open the blank prompt window
// sign = prompt();       //  open the blank prompt window
// sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
// sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"


// // Add prompt asking password character options + length



// // if (password === true) {
// //   var length = prompt("How many characters?");
// //   if else 
// // }

// // if (nextTag === true) {
// //   var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
// //   if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
// //     alert("please enter a valid tag");
// //   } else {
// //     var secondTag = document.createElement(secondTagName);
// //     secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
// //     document.body.appendChild(secondTag);
// //   }
// // }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // Add copy button


//<button onclick = "myFunction()">Click ma</button>

<input type = "btn" onclick= "prompt('jbjbhj');" value = "Generate Password" />

var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//ask for character type
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  // var charTypeLower = charType.toLowerCase();
  // if (charTypeLower === "lowercase") {
  //   charSet = "abcdefghijklmnopqrstuvwxyz";
  // } else if (charTypeLower === "uppercase") {
  //   charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // } else if (charTypeLower === "numeric") {
  //   charSet = "0123456789";
  // } else if (charTypeLower === "special") {
  //   charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  // }
  //return value
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