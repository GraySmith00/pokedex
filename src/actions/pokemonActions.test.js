import * as actions from './pokemonActions';
import { mockPokieObj } from './mockActionData';

describe('pokemonActions', () => {
  it('should return an object with a type of ADD_POKEMON_TO_STATE, and a pokies array', () => {
    const pokieObj = mockPokieObj;

    const expected = {
      type: 'ADD_POKEMON_TO_STATE',
      pokieObj
    };

    const result = actions.addPokemonToState(mockPokieObj);

    expect(result).toEqual(expected);
  });
});
