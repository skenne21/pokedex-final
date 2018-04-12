import { combineReducers } from 'redux';
import  typeReducer  from './typeReducer';
import pokemonReducer from './pokemonReducer';

const rootReducer = combineReducers({
  types: typeReducer,
  pokemons: pokemonReducer
})

export default rootReducer
