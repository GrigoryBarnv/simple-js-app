// IIFE (Immediately Invoked Function Expression) to encapsulate the module
let pokemonRepository = (function () {
  // Private array to hold all Pokémon
  let pokemonList = [];

  // URL of the Pokémon API, requesting 150 Pokémon
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  // let modalContainer = document.querySelector("#modal-container");

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
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");

    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "bg-warning", "text-center");
    listItem.style.display = "flex";
    listItem.style.flexDirection = "column";
    listItem.style.alignItems = "center";

    // Create image (small thumbnail)
    let img = document.createElement("img");
    img.src = pokemon.imageUrlFront || "https://via.placeholder.com/50"; // fallback placeholder
    img.alt = pokemon.name;
    img.width = 50;

    // Create name
    let name = document.createElement("span");
    name.innerText = pokemon.name;

    // Create button
    let button = document.createElement("button");
    button.innerText = "See Profile";
    button.classList.add("btn", "btn-primary", "ml-2");



    // Click event → show modal
    button.addEventListener("click", function () {
      pokemonRepository.showDetails(pokemon);
    });

    // Append everything
    listItem.appendChild(img);
    listItem.appendChild(name);
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }


  function loadList() {
    return fetch(apiUrl)
      .then(response => response.json())
      .then(function (json) {
        return Promise.all(
          json.results.map(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            // Fetch details, then add to DOM
            return loadDetails(pokemon).then(() => {
              addListItem(pokemon);
            });
          })
        );
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  /*   // Loads additional details (image, height, types) for a specific Pokémon
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
    } */

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Front + back images
      item.imageUrlFront = details.sprites.front_default;
      item.imageUrlBack = details.sprites.back_default;

      // Height + weight
      item.height = details.height;
      item.weight = details.weight;

      // Types array → convert to string
      item.types = details.types.map(typeInfo => typeInfo.type.name).join(", ");

      // Abilities array → convert to string
      item.abilities = details.abilities.map(abilityInfo => abilityInfo.ability.name).join(", ");
    }).catch(function (e) {
      console.error(e);
    });
  }


  // function showModal(title, text, imgUrl) {


  //   //create the modal box 
  //   modalContainer.innerHTML = "";
  //   let modal = document.createElement("div");
  //   modal.classList.add("modal");

  //   //make a close button for the modal
  //   let closeButton = document.createElement("button");
  //   closeButton.innerText = 'Close';
  //   closeButton.classList.add("button-class");
  //   closeButton.addEventListener("click", hideModal);

  //   //make a title for the modal
  //   let titleElement = document.createElement('h1');
  //   titleElement.innerText = title;

  //   //make a paragraph for the modal
  //   let contentElement = document.createElement('p');
  //   contentElement.innerText = text;

  //   //make an image for the modal
  //   let imageElement = document.createElement('img');
  //   imageElement.src = imgUrl;
  //   imageElement.alt = title;

  //   modal.appendChild(closeButton);
  //   modal.appendChild(titleElement);
  //   modal.appendChild(contentElement);
  //   modal.appendChild(imageElement);

  //   modalContainer.appendChild(modal);
  //   modalContainer.classList.add('is-visible');
  // }

/*   // function to close the modal
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  //close the modal by clicking outside of it 
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      hideModal();
    }
  });
  
 */
/*   // close modal when ESC pressed
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  }) */;
  function showModal(pokemon) {
    let modalTitle = document.querySelector(".modal-title");
    let modalBody = document.querySelector(".modal-body");

    // Clear modal body
    modalBody.innerHTML = "";
    let msg = "Hello"; // ESLint will complain → should be 'Hello'

    // Set title
    modalTitle.innerText = pokemon.name;

    // Images
    let imageFront = document.createElement("img");
    imageFront.src = pokemon.imageUrlFront;
    imageFront.classList.add("img-fluid", "mb-2");

    let imageBack = document.createElement("img");
    imageBack.src = pokemon.imageUrlBack;
    imageBack.classList.add("img-fluid", "mb-2");

    // Info
    let heightElement = document.createElement("p");
    heightElement.innerText = `Height: ${pokemon.height}`;

    let weightElement = document.createElement("p");
    weightElement.innerText = `Weight: ${pokemon.weight}`;

    let typesElement = document.createElement("p");
    typesElement.innerText = `Types: ${pokemon.types}`;

    let abilitiesElement = document.createElement("p");
    abilitiesElement.innerText = `Abilities: ${pokemon.abilities}`;

    // Append all
    modalBody.appendChild(imageFront);
    modalBody.appendChild(imageBack);
    modalBody.appendChild(heightElement);
    modalBody.appendChild(weightElement);
    modalBody.appendChild(typesElement);
    modalBody.appendChild(abilitiesElement);

    // Show Bootstrap modal
    $("#exampleModal").modal("show");
  }
  function showDetails(item) {
    loadDetails(item).then(function () {
      showModal(item);
    });
  }



  //creates an object with keys (add, getAll, etc...) to use PokemonReositry.getAll() for example 
  return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails,
    showDetails
  }

})();

// Load the Pokémon list and then display each one on the page
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

