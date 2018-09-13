import { pokemonReducer } from './pokemonReducer';
import * as actions from '../actions/pokemonActions';
import { mockPokies } from './mockReducerData';

describe('pokemonReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = pokemonReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the proper state when new pokies are added', () => {
    const expected = mockPokies;

    const result = pokemonReducer(
      undefined,
      actions.addPokemonToState(mockPokies)
    );

    expect(result).toEqual(expected);
  });
});
