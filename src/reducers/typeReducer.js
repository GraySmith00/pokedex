export const typeReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_POKE_TYPES_STATE':
      return action.pokeTypes;

    default:
      return state;
  }
};
