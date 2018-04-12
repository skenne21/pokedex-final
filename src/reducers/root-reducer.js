import { combineReducers } from 'redux'
import pokemonReducer from './pokemon-reducer'

const rootReducer = combineReducers({
  types: pokemonReducer
})

export default rootReducer
