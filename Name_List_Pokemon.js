
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')  
    .then(response => response.json())
    .then(data => {
     
      console.log("Lista de Pokémon clásicos:");
      data.results.forEach(pokemon => {
        console.log(capitalizeFirstLetter(pokemon.name));
      });
    })
    .catch(error => {
      console.error("Hubo un error en la petición:", error);
    });
  