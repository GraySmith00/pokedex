import * as actions from './typeActions';
import { mockTypes } from './mockActionData';

describe('typeActions', () => {
  it('should return an object with a type of SET_POKE_TYPES_STATE, and an array of pokeTypes', () => {
    const pokeTypes = mockTypes;

    const expected = {
      type: 'SET_POKE_TYPES_STATE',
      pokeTypes
    };

    const result = actions.setPokeTypesState(mockTypes);

    expect(result).toEqual(expected);
  });
});
