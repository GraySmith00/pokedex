import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PokieTypeCard from '../PokieTypeCard/PokieTypeCard';

import './CardList.css';

export const CardList = ({ types }) => {
  const displayCards = types.map(type => (
    <PokieTypeCard key={type.id} type={type} />
  ));

  return <div className="card-list">{displayCards}</div>;
};

CardList.propTypes = {
  types: PropTypes.array.isRequired
};

export const mapStateToProps = state => ({
  types: state.types
});

export default connect(mapStateToProps)(CardList);
