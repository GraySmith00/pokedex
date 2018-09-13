import * as actions from './currentCardActions';

describe('currentCardActions', () => {
  it('should return an object with a type of SET_CURRENT_CARD, and a pokieTypeName', () => {
    const pokieTypeName = 'normal';
    const expected = {
      type: 'SET_CURRENT_CARD',
      pokieTypeName
    };

    const result = actions.setCurrentCard(pokieTypeName);

    expect(result).toEqual(expected);
  });
});
