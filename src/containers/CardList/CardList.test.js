import React from 'react';
import { shallow } from 'enzyme';

import { CardList, mapStateToProps } from './CardList';
import { mockTypes } from './mockCardListData';

describe('CardList component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardList types={mockTypes} />);
  });

  describe('mapStateToProps', () => {
    it('should return an object with a types array', () => {
      const mockStore = {
        types: mockTypes
      };

      const expected = {
        types: mockTypes
      };

      const mappedProps = mapStateToProps(mockStore);

      expect(mappedProps).toEqual(expected);
    });
  });
});
