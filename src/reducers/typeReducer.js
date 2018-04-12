const typeReducer = (state= [], action) => {
  switch (action.type) {
  case 'SET_TYPES':
    return [...state, ...action.pokemon]
  default:
    return state;
  }
};

export default typeReducer
