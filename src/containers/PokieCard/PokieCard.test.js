import { mapStateToProps, mapDispatchToProps } from './PokieCard';
import { addPokemonToState } from '../../actions/pokemonActions';
import { mockPokieObj } from './mockPokieCardData';
import { setCurrentCard } from '../../actions/currentCardActions';

describe('PokieCard component', () => {
  it('should return an object with a currentCard string', () => {
    const mockStore = {
      currentCard: 'normal'
    };

    const expected = {
      currentCard: 'normal'
    };

    const mappedProps = mapStateToProps(mockStore);

    expect(mappedProps).toEqual(expected);
  });

  it('should return an object with a pokemon object', () => {
    const mockStore = {
      pokemon: mockPokieObj
    };

    const expected = {
      pokemon: mockPokieObj
    };

    const mappedProps = mapStateToProps(mockStore);

    expect(mappedProps).toEqual(expected);
  });

  it('should dispatch an addPokemonToState function using mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addPokemonToState(mockPokieObj);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addPokemonToState(mockPokieObj);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should dispatch a setCurrentCard function using mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const typeName = 'normal';

    const actionToDispatch = setCurrentCard(typeName);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setCurrentCard(typeName);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
