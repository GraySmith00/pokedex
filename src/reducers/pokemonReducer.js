export const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON_TO_STATE':
      return [...state, ...action.pokies];

    default:
      return state;
  }
};
