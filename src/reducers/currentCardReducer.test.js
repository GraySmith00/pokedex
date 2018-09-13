import { currentCardReducer } from './currentCardReducer';
import * as actions from '../actions/currentCardActions';

describe('currentCardReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = currentCardReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the proper state when the currentCard is set', () => {
    const expected = 'normal';
    const result = currentCardReducer(
      undefined,
      actions.setCurrentCard('normal')
    );
    expect(result).toEqual(expected);
  });

  it('should set the state back to an empty string if the state is already that type', () => {
    const expected = '';
    const result = currentCardReducer(
      'normal',
      actions.setCurrentCard('normal')
    );
    expect(result).toEqual(expected);
  });
});
