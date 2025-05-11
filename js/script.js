// scripts.js

// Create an empty array to hold Pokémon data
let pokemonList = [];

// Add Pokémon objects to the array
pokemonList = [
  {
    name: 'Bulbasaur',
    height: 7,
    types: ['grass', 'poison']
  },
  {
    name: 'Charmander',
    height: 6,
    types: ['fire']
  },
  {
    name: 'Squirtle',
    height: 5,
    types: ['water']
  }
];

// Log the list to verify it works
console.log(pokemonList);


//for loop that iterates over each item in pokemonList
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' height is ' + pokemonList[i].height + '.<br>');


}




