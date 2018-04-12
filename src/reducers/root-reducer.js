import { combineReducers } from 'redux'
import  typeReducer  from './typeReducer'

const rootReducer = combineReducers({
  types: typeReducer
})

export default rootReducer
