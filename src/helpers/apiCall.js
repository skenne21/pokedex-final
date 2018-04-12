export const getTypes =  async () => {
  try {
    const response = await fetch('http://localhost:3001/types');
    const apiData = await response.json();
    return apiData;
  } catch (error) {
    throw error
  }
}

export const getPokemon = async (ids) => {
  const pokemonPromises = ids.map(async pokemon => {
    const response = await fetch(`http://localhost:3001/pokemon/${pokemon}`);
    const apiData = await response.json();
    const indivdualPokemon = {
      name: apiData.name,
      weight: apiData.weight,
      image: apiData.sprites.back_default
    }
    return indivdualPokemon;
  })  
  return Promise.all(pokemonPromises)
}



// export const cleanPokemon = (allPokemon) => {
//   const pokemonPromises = allPokemon.map( async type => {
//     const pokemonType = await cleanType(type);
//     console.log(pokemonType)
//   })  
// }

// export const cleanType = async(type) => {
//   // console.log(type)
//   // const pokemonArray = Object.keys(type).reduce( (array, key)  => {
//   //   if (!type[key.name]) {
//   //     key[name] = [];
//   //   }
//   //   console.log()
//     const pokemon = await cleanSpecies(type.id, type.pokemon)
//     console.log(pokemon)
 
//   // }
// }



// export const cleanSpecies = (id, pokemon) => {
//   const pokemonPromises = pokemon.map(async pokemon => {
//     const response = await fetch(`http://localhost:3001/pokemon/${pokemon}`);
//     const apiData = await response.json();
//     const indivdualPokemon = {
//       name: apiData.name,
//       weight: apiData.weight,
//       image: apiData.sprites.back_default
//     }
//     return indivdualPokemon;
//   })
//   return Promise.all(pokemonPromises)
// }

