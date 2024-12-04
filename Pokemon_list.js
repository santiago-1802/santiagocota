
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  fetch('https://pokeapi.co/api/v2/pokemon/1')  
    .then(response => response.json())
    .then(pokemonDetails => {
  
      console.log("Detalles del Pokémon:");
      console.log("Nombre:", capitalizeFirstLetter(pokemonDetails.name));
  
      console.log("Tipos:");
      pokemonDetails.types.forEach(type => {
        console.log("- " + capitalizeFirstLetter(type.type.name));
      });
      
      console.log("Habilidades:");
      pokemonDetails.abilities.forEach(ability => {
        console.log("- " + capitalizeFirstLetter(ability.ability.name));
      });
  
      console.log("Estadísticas:");
      pokemonDetails.stats.forEach(stat => {
        console.log(stat.stat.name + ": " + stat.base_stat);
      });
    })
    .catch(error => {
      console.error("Hubo un error en la petición:", error);
    });
  
    /*codigo terminado*/