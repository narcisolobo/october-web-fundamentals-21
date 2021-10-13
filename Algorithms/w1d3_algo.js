// Conditionals - or "If Statements"

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

// New keyword alert!!! if starts a conditional statement.
// Followed by a set of parentheses
// In the parens, place a boolean expression
// After closing paren, curly braces at the bookends of the code block

if (isSunny) {
  // whatToBring = whatToBring + "sunglasses, ";
  whatToBring += "sunglasses, ";
}
console.log(whatToBring);
// -> I should bring: sunglasses, 

if (temperature < 50) {
  whatToBring += "a coat, ";
}

console.log(whatToBring);
// -> I should bring: sunglasses, a coat,

// Boolean expression if false - No running of the code block
if (isRaining) {
  whatToBring += "an umbrella, ";
}

whatToBring += "and a smile!";

console.log(whatToBring);
// -> I should bring: sunglasses, a coat, and a smile!

// Prepare for downcount
// Else means - OTHERWISE!!!

for (var i = 10; i > 0; i--) {
  if (i != 2) {
    console.log(i);
    // otherwise
  } else {
    console.log("ignition!");
  }
}

console.log("liftoff!");

// Count positives
var numbers = [3, 4, -2, 7, 16, -8, 0, 8, 6, -2];

// PSEUDOCODE!!

// Create a variable called count and set it to 0
var countPositives = 0;
var countNegatives = 0;
// Create a for loop, start at 0, end at the end of the array, increment by one
for (var i = 0; i < numbers.length; i++) {
  // Inside the for loop, check to see if current value is positive
  if (numbers[i] > 0){
    // If so, then increment count
    countPositives++;
  } else if (numbers[i] < 0) {
    countNegatives++;
  }
}
// After the loop, print count
console.log("there are " + countPositives + " positive values");
console.log("there are " + countNegatives + " negative values");