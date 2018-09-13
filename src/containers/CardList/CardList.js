import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PokeCard from '../PokeCard/PokeCard';

const CardList = ({ types }) => {
  const displayCards = types.map(type => (
    <PokeCard key={type.id} type={type} />
  ));

  return <div>{displayCards}</div>;
};

CardList.propTypes = {
  types: PropTypes.array.isRequired
};

export const mapStateToProps = state => ({
  types: state.types
});

export default connect(mapStateToProps)(CardList);
