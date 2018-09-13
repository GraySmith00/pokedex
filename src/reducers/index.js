import { combineReducers } from 'redux';
import { typeReducer } from './typeReducer';
import { pokemonReducer } from './pokemonReducer';

const rootReducer = combineReducers({
  types: typeReducer,
  pokemon: pokemonReducer
});

export default rootReducer;
