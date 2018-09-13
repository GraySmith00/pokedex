import { typeReducer } from './typeReducer';
import * as actions from '../actions/typeActions';
import { mockTypes } from './mockReducerData';

describe('typeReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = typeReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the proper state when the pokieTypes are set', () => {
    const expected = mockTypes;

    const result = typeReducer(undefined, actions.setPokeTypesState(mockTypes));

    expect(result).toEqual(expected);
  });
});
