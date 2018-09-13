import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPokemonByType } from '../../utils/apiCalls';
import { addPokemonToState } from '../../actions/pokemonActions';

export class PokeCard extends Component {
  handleClick = async () => {
    const { type, addPokemonToState } = this.props;
    const pokies = await getPokemonByType(type.pokemon);
    addPokemonToState(pokies);
  };

  render() {
    const { type } = this.props;
    return (
      <div>
        <h3 onClick={this.handleClick}>{type.name}</h3>
      </div>
    );
  }
}

PokeCard.propTypes = {
  type: PropTypes.object.isRequired,
  addPokemonToState: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  addPokemonToState: pokies => dispatch(addPokemonToState(pokies))
});

export default connect(
  null,
  mapDispatchToProps
)(PokeCard);
