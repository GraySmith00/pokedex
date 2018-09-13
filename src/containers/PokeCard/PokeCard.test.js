import React from 'react';
import { shallow } from 'enzyme';

import { PokeCard, mapDispatchToProps } from './PokeCard';
import { addPokemonToState } from '../../actions/pokemonActions';
import { mockType, mockPokies } from './mockPokeCardData';

describe('PokeCard component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PokeCard type={mockType} addPokemonToState={addPokemonToState} />
    );
  });

  it('should dispatch a function using mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addPokemonToState(mockPokies);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addPokemonToState(mockPokies);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
