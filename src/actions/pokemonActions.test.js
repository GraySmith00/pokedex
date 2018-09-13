import * as actions from './pokemonActions';
import { mockPokies } from './mockActionData';

describe('pokemonActions', () => {
  it('should return an object with a type of ADD_POKEMON_TO_STATE, and a pokies array', () => {
    const pokies = mockPokies;

    const expected = {
      type: 'ADD_POKEMON_TO_STATE',
      pokies
    };

    const result = actions.addPokemonToState(mockPokies);

    expect(result).toEqual(expected);
  });
});
