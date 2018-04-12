const pokemonReducer = (state= [], action) => {
  switch (action.type) {
  case 'SET_POKEMON':
    return [...state, ...action.pokemon]
  default:
    return state;
  }
};

export default pokemonReducer
