export const currentCardReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT_CARD':
      let newState;
      if (state === action.pokieTypeName) {
        newState = '';
      } else {
        newState = action.pokieTypeName;
      }
      return newState;

    default:
      return state;
  }
};
