export const getPokeTypes = async () => {
  const url = 'http://localhost:3001/types';
  const response = await fetch(url);
  const pokeTypes = await response.json();
  return pokeTypes;
};

export const getPokemonByType = async typeIds => {
  const unresolvedPromises = typeIds.map(async id => {
    const url = `http://localhost:3001/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    return pokemon;
  });
  return Promise.all(unresolvedPromises);
};
