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
    const apiData = await fetchPokemon(pokemon)
    const indivdualPokemon = {
      name: apiData.name,
      weight: apiData.weight,
      image: apiData.sprites.back_default
    }
    return indivdualPokemon;
  })  
  return Promise.all(pokemonPromises)
}

export const fetchPokemon = async (pokemon) => {
  try {
    const response = await fetch(`http://localhost:3001/pokemon/${pokemon}`);
    const apiData = await response.json();
    return apiData;
  } catch (error) {
    throw error
  }  
}


