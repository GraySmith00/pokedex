export const currentCardReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT_CARD':
      return action.pokieTypeName;

    default:
      return state;
  }
};
