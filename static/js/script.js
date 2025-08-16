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

  // // Loads and logs Pokémon details to the console
  // function showDetails(item) {
  //   pokemonRepository.loadDetails(item).then(function () {
  //     console.log(item);
  //   });
  // }

// new one HEWRE FIXX!!!! 
  function showDetails(item) {
  loadDetails(item).then(function () {
    showModal(item.name, `Height: ${item.height}`, item.imageUrl);
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


//try 
let container = document.querySelector('.container');
container.innerHTML = '<button>Click me</button>';
console.log(container);

// TODODOTODOTO FIX !!!!!!! 
//#########################################
//#########################################
// FROM HERE MAYBE I NEED TO USE IIFE - --- -- ----------- PUT IT ALL INSIDE THE IIFE ti has acces to everything nt th right order 
AND WATSCH ADDITIONAL MATERIAL !!!!
//#########################################
//#########################################
let modalContainer = document.querySelector('#modal-container');

function showModal(title, text, imgUrl) {
  modalContainer.innerHTML ='';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButton = document.createElement('button');
  closeButton.classList.add('modal-close');
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', hideModal);

  let titleElement = document.createElement('h1');
  titleElement.innerText = title;

  let contentElement = document.createElement('p');
  contentElement.innerText = text;

  let imageElement = document.createElement('img');
  imageElement.src = imgUrl;
  imageElement.alt = title;

  modal.appendChild(closeButton);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(imageElement);

  modalContainer.appendChild(modal);
  modalContainer.classList.add('is-visible');
  
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();

  }
});



modalContainer.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    hideModal();
  }
});


function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    showModal(item.name, `Height: ${item.height}`, item.imageUrl);

  });
}

// STOPED ON 1.7 JSON 