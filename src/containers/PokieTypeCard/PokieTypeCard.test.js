import React from 'react';
import { shallow } from 'enzyme';

import { PokieTypeCard, mapDispatchToProps } from './PokieTypeCard';
import { addPokemonToState } from '../../actions/pokemonActions';
import { mockType, mockPokieObj } from './mockPokieTypeCardData';

describe('PokieTypeCard component', () => {
  // let wrapper;
  // let setCurrentCard;

  // beforeEach(() => {
  //   setCurrentCard = jest.fn();
  //   wrapper = shallow(
  //     <PokieTypeCard
  //       type={mockType}
  //       addPokemonToState={addPokemonToState}
  //       pokemon={mockPokemon}
  //     />
  //   );
  // });

  it('should dispatch a function using mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addPokemonToState(mockPokieObj);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addPokemonToState(mockPokieObj);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
