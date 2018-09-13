export const getPokeTypes = async () => {
  const url = 'http://localhost:3001/types';
  const response = await fetch(url);
  const pokeTypes = await response.json();
  return pokeTypes;
};
