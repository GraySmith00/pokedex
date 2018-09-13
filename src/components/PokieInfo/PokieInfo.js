import React from 'react';
import PropTypes from 'prop-types';

import './PokieInfo.css';

const PokieInfo = ({ pokemon }) => {
  const displayPokies = pokemon.map(pokie => (
    <div key={pokie.id}>
      <img src={pokie.sprites.back_default} alt="" />
      <p>{`name: ${pokie.name}`}</p>
      <p>{`weight: ${pokie.weight}`}</p>
    </div>
  ));

  return <div className="pokie-info">{displayPokies}</div>;
};

PokieInfo.propTypes = {
  pokemon: PropTypes.array.isRequired
};

export default PokieInfo;
