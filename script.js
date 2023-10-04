var generateBtn = document.querySelector("#generate");
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
var enter
var choice 
var toUpper = function (x) {
    return x.toUpperCase();
};

letter2 = letter.map(toUpper);

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min )
}

function generatePassword(){
     
    
    var characterLength = prompt("Please enter a character length between 8 and 128");
     console.log (characterLength)
    
     var upperCase = confirm("Do you want uppercase letters?");
     console.log (upperCase)

     var lowerCase = confirm("do you want to lowercase letters")
     console.log (lowerCase)

     var numeric = confirm ("do you want numbers in your password?")
     console.log (numeric)

     var specialCharacters = confirm ("do you want special characters?")
     console.log (specialCharacters)
     
    
     
     if (specialCharacters && numeric && upperCase && lowerCase) {

        choice = character.concat(number, letter, letter2);
     } else if (specialCharacters && numeric && upperCase){
     
     choice = character.concat(number, letter2);
    } else if (specialCharacters && lowerCase && upperCase) {
       
        choice = character.concat(letter, letter2)
    } else if (numeric && lowerCase && upperCase){
        
        choice = number.concat(letter, letter2)
    } else if (specialCharacters && numeric){

        choice = character.concat(number)
    } else if (specialCharacters && lowerCase){
        
        choice = character.concat(letter)
    } else if (specialCharacters && upperCase){
        
        choice = character.concat(letter2)
    } else if (specialCharacters && lowerCase){
       
        choice = letter2.concat(letter)
    } else if (upperCase && numeric){
       
        choice = letter2.concat(number)
    } else if (lowerCase && numeric){
        
        choice = letter.concat(number)
    } else if (specialCharacters){

        choice = character
    } else if (numeric){

        choice = number
    } else if (upperCase){

        choice = letter2
    } else if (lowerCase){

        choice = letter
    };

    //  array  [ "a", "b", "c" ]
    // for each character in the password, get a random value from the choice array

    var password = ""

    for( var i = 0; i < characterLength; i++ ){
        var random = getRandomNumber(0, choice.length - 1)
        var randomCharacter = choice[random]
        password = password + randomCharacter;  // password += randomCharacter
    }

    return password

}
    






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);









//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

