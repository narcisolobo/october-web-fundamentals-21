console.log("We are connected!");

// We can call a function like this
function alertName() {
    alert("This Pokemon's name is Suicune");
}

// name can be element or pokemon or whatever
function enter(pokemon){
    pokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/155.png";
}

function leave(element){
    element.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png";
}

function getNumber() {
    var element = document.querySelector("#number");
    console.log(element.value);
    var myPoke = document.querySelector("#myPokemon");
    myPoke.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ element.value +'.png" alt="pokemon">'
}

