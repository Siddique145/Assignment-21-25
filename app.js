var firstName = prompt("Please enter your First Name")
var lastName = prompt("Please enter your Last Name")
var fullName = firstName +" "+lastName
alert("Welcome " + fullName + " !")

var phoneModel = prompt("Please enter your favorite mobile Phone Model")
var inputLength = phoneModel.length
alert("The length of your favorite mobile phone model is " + inputLength)


var word = "Pakistani";
var indexOfN = word.indexOf("n");
alert(`The index of the letter "n" in the word "${word}" is: ${indexOfN}`);

var word = "Hello World";
var indexOfl = word.indexOf("l");
alert(`The index of the letter "l" in the word "${word}" is: ${indexOfl}`);

var word = "Pakistani";
var characterAtIndex3 = word.charAt(2);
alert(`The character at the 3rd index in the word "${word}" is: ${characterAtIndex3}`);

var originalWord = "Hyderabad"
var modifiedWord = originalWord.replace("Hyder", "Islam");
alert("Modified word: " + modifiedWord);

var message = "Ali and Sami are best friends. They play cricket and football together.";
alert(message)
var modifiedMessage = message.replace("and ","& ");
alert(modifiedMessage);

var numberValue = "472"
var numberType = "String"
var number ="472"
var type = "number"
alert( `Value"${numberValue}" +  Type "${numberType}" + Value "${  number}" + Type "${ type}"`)

var userinput = prompt("please write any word to be coverted in to the capital letters")
var output = userinput.toUpperCase()
alert(output)

var user = prompt("Write any word in small alphabet ")
var userPrompt = user[0].toUpperCase()+user.slice(1)
alert(userPrompt)

var num = 35.36;
alert(num)
var numAsString = num.toString().replace(".", "");
alert("Modified value: " + numAsString);

var userInput = prompt("Please enter your username:");

var specialSymbols = /[@.,!]/;
if (specialSymbols.test(userInput)) {
    alert("Please enter a valid username without special symbols (@, ., ,, or !).");
} else {
    alert("Username accepted: " + userInput);
}
