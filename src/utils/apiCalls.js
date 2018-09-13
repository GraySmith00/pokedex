export const getPokeTypes = async () => {
  const url = 'http://localhost:3001/types';
  // return fetch(url)
  //   .then(response => response.json())
  //   .then(pokeTypes => pokeTypes);
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
