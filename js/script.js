

//for each function instead of for each loop (prints the same as loop above)
pokemonList.forEach(function(pokemon) {
addListItem(pokemon);
});


// IIFE (Immediately Invoked Function Expression) to encapsulate all logic
let pokemonRepository = (function () {
  // Private array to store Pokémon data
  let pokemonList = [];

  // Function to add a Pokémon to the list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // Function to return all Pokémon in the list
  function getAll() {
    return pokemonList;
  }

  // Function to create and add a list item (button) for a Pokémon
  function addListItem(pokemon) {
    // Select the <ul> element with the class 'pokemon-list'
    let ul = document.querySelector('.pokemon-list');

    // Create a new list item (<li>)
    let listItem = document.createElement('li');

    // Create a button for the Pokémon
    let button = document.createElement('button');
    button.innerText = pokemon.name; // Set the button text to the Pokémon's name

    // Add a custom class to the button for styling
    button.classList.add('pokemon-button');

    // Append the button to the list item
    listItem.appendChild(button);

    // Append the list item to the unordered list
    ul.appendChild(listItem);
  }
  
  // Function to show details of a Pokémon
  button.addEventListener('click', function() {
    showDetails(pokemon);
  });

  // Return only the public functions (everything else remains private)
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

//function to show details of a Pokémon
function showDetails(pokemon) {
  console.log(pokemon);
}

//addPokémon to the repository
pokemonRepository.add({
  name: 'Bulbasaur',
  height: 7,
  types: ['grass', 'poison']
});
pokemonRepository.add({
  name: 'Charmander',
  height: 6,
  types: ['fire']
});
pokemonRepository.add({
  name: 'Squirtle',
  height: 5,
  types: ['water']
});
pokemonRepository.add({
  name: 'Pikachu',
  height: 4,
  types: ['electric']
});

// Loop through Pokémon and display them
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});