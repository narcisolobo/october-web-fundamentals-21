var monster = {
  id: 1,
  name: "Bulbasaur",
  types: ["poison", "grass"]
};

// Using the monster variable above how could we access the name?
console.log(monster.name)

// Using the monster variable above how could we access the 2nd type?
console.log(monster.types[1])

var pokémon = [
  { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
  { "id": 5, "name": "Charmeleon", "types": ["fire"] },
  { "id": 9, "name": "Blastoise", "types": ["water"] },
  { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
  { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
  { "id": 23, "name": "Ekans", "types": ["poison"] },
  { "id": 24, "name": "Arbok", "types": ["poison"] },
  { "id": 25, "name": "Pikachu", "types": ["electric"] },
  { "id": 37, "name": "Vulpix", "types": ["fire"] },
  { "id": 52, "name": "Meowth", "types": ["normal"] },
  { "id": 63, "name": "Abra", "types": ["psychic"] },
  { "id": 67, "name": "Machamp", "types": ["fighting"] },
  { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
  { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
  { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
  { "id": 98, "name": "Krabby", "types": ["water"] },
  { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
  { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
  { "id": 133, "name": "Eevee", "types": ["normal"] },
  { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
  { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
  { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
  { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// If we wanted to console.log the names of the pokémon who have an id greater than 99 we could...

console.log('The names of the pokémon whose id is greater than 99 are:');
for (var i = 0; i < pokémon.length; i++) {
  if (pokémon[i].id > 99) {
    console.log(pokémon[i].name);
  }
}
console.log('\n');

// Challenges - using the array of pokémon above and loops:
// console.log the pokémon objects whose id is evenly divisible by 3
console.log('The pokémon whose id is evenly divisible by 3:');
for (var i = 0; i < pokémon.length; i++) {
  // check if the id of the current pokemon in the array is divisible by 3
  if (pokémon[i].id % 3 == 0) {
    // if it is, print the current pokemon in the array
    console.log(pokémon[i]);
  }
}
console.log('\n');

// WHAT THE HECK IS THE PERCENTAGE SIGN? MODULO? WHAT?
// The modulo or modulous operator returns the remainder of division.
console.log(6 % 3 == 0)

// console.log the pokémon objects that have more than one type
console.log('The pokémon that have more than one type:');
for (var i = 0; i < pokémon.length; i++) {
  // check if there's more than one element in the types array of the current pokemon in the array
  if (pokémon[i].types.length > 1) {
    // if there are, print the current pokemon in the array
    console.log(pokémon[i]);
  }
}
console.log('\n');

// console.log the names of the pokémon whose only type is "poison"
console.log('The names of the pokémon whose only type is "poison:');
for (var i = 0; i < pokémon.length; i++) {
  // check if there's only one element in the types array of the current pokemon in the array AND if it is equal to 'poison'
  if (pokémon[i].types.length == 1 && pokémon[i].types[0] == 'poison') {
    // if both conditions are true, print the name of the current pokemon in the array
    console.log(pokémon[i].name);
  }
}
console.log('\n');

// console.log the first type of all the pokémon whose second type is "flying"
console.log('The first type of all the pokémon whose second type is "flying":');
for (var i = 0; i < pokémon.length; i++) {
  // check if the second element in the types array is equal to 'flying'
  if (pokémon[i].types[1] == 'flying') {
    // if so, print the first type
    console.log(pokémon[i].types[0]);
  }
}
console.log('\n');

// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
console.log('The reverse of the names of the pokémon whose only type is "poison":');
for (var i = 0; i < pokémon.length; i++) {
  // check if the only type is poison
  if (pokémon[i].types == 'poison') {
    // turn the name into an array
    var nameArray = pokémon[i].name.split('');
    // reverse the array
    var reversedNameArray = nameArray.reverse();
    // turn it back into a string
    var joinedString = reversedNameArray.join('');
    // print it out
    console.log(joinedString);
  }
}

