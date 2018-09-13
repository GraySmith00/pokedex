import { mapStateToProps } from './CardList';
import { mockTypes } from './mockCardListData';

describe('CardList component', () => {
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
