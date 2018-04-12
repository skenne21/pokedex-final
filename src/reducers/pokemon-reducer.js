const pokemonReducer = (state= [], action) => {
  switch (action.type) {
  case 'GET_POKEMON':
    return [...state, ...action.pokemon]
  default:
    return state;
  }
};

export default pokemonReducer
