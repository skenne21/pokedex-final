const typeReducer = (state= [], action) => {
  switch (action.type) {
  case 'SET_TYPES':
    return [...state, ...action.types]
  default:
    return state;
  }
};

export default typeReducer
