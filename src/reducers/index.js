import { combineReducers } from 'redux';
import fakeReducer from './fake-reducer';
import { typeReducer } from './typeReducer';

const rootReducer = combineReducers({
  types: typeReducer
});

export default rootReducer;
