// IIFE (Immediately Invoked Function Expression) to encapsulate the module
let pokemonRepository = (function () {
  // Private array to hold all Pokémon
  let pokemonList = [];

  // URL of the Pokémon API, requesting 150 Pokémon
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Adds a single Pokémon object to the list, if valid
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  // Returns the full list of Pokémon
  function getAll() {
    return pokemonList;
  }

  // Creates and adds a button for a Pokémon to the DOM
  function addListItem(pokemon) {
    // Selects the <ul> element with the class 'pokemon-list'
    let pokemonList = document.querySelector(".pokemon-list");

    // Creates a <li> and a <button> element
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");

    // Sets the button text and style class
    button.innerText = pokemon.name;
    button.classList.add("button-class");

    // Adds the button to the list item, then adds the list item to the page
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    // Adds a click event to load and show Pokémon details
    button.addEventListener("click", function () {
      pokemonRepository.showDetails(pokemon);
    });
  }

  // Loads the list of Pokémon (names and detail URLs) from the API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json(); // Parse response into JSON
    }).then(function (json) {
      // For each Pokémon item, create an object and add it to the list
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon); // Optional: log to verify loading
      });
    }).catch(function (e) {
      console.error(e); // Handle fetch errors
    });
  }

  // Loads additional details (image, height, types) for a specific Pokémon
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Adds new detail properties to the Pokémon object
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e); // Handle detail fetch errors
    });
  }

  // Loads and logs Pokémon details to the console
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  // Expose public methods
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

// Load the Pokémon list and then display each one on the page
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


//d
//
//
d
