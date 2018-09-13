import React from 'react';
import { shallow } from 'enzyme';

import { Home, mapDispatchToProps } from './Home';
import { setPokeTypesState } from '../../actions/typeActions';
import { mockTypes } from './mockHomeData';

describe('Home component', () => {
  // let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(<Home />);
  // });

  describe('mapDispatchToProps', () => {
    it('should dispatch a function using mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setPokeTypesState(mockTypes);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setPokeTypesState(mockTypes);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
