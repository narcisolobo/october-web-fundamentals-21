// JavaScript Objects. What are they even?

// Car (IRL):
// Characteristics: Color, Number of Doors, Make, Model, etc.
// Things that it can do: Beep, Accelerate, Brake, etc.

// Object Literal Notation
// Key-value pairs

// Characteristic in JS are called properties
// Things that it can do in JS are called methods

var myCar = {
  "color": "light blue",
  "numDoors": 2,
  "make": "Jeep",
  "model": "Wrangler",
  "beep": function (){
    console.log('beep beep')
  },
  'printStats': function(){
    console.log(
      this.color,
      this.numDoors,
      this.make,
      this.model
    )
  }
}

// Setting and Getting values in JS Objects using dot notation

// Setting:
myCar.color = "orange";

// Getting:
console.log(myCar.color);

// Calling a method using dot notation
myCar.beep();

// Setting and Getting values in JS Objects using bracket notation

// Setting:
myCar['color'] = 'light blue';

// Getting:
console.log(myCar['color']);

myCar.printStats();

function remove(element){
  element.remove();
}