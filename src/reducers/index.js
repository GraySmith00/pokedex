import { combineReducers } from 'redux';
import { typeReducer } from './typeReducer';
import { pokemonReducer } from './pokemonReducer';
import { currentCardReducer } from './currentCardReducer';

const rootReducer = combineReducers({
  types: typeReducer,
  pokemon: pokemonReducer,
  currentCard: currentCardReducer
});

export default rootReducer;
