import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PokieCard from '../PokieCard/PokieCard';

import './CardList.css';

export const CardList = ({ types }) => {
  const displayCards = types.map(type => (
    <PokieCard key={type.id} type={type} />
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
