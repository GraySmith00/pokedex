import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPokemonByType } from '../../utils/apiCalls';
import { addPokemonToState } from '../../actions/pokemonActions';
import { setCurrentCard } from '../../actions/currentCardActions';

export class PokeCard extends Component {
  handleClick = async () => {
    const { type, addPokemonToState, setCurrentCard } = this.props;
    const pokies = await getPokemonByType(type.pokemon);
    const pokieObj = {
      [type.name]: pokies
    };
    addPokemonToState(pokieObj);
    setCurrentCard(type.name);
  };

  render() {
    const { type, currentCard, pokemon } = this.props;
    let content;

    if (type.name === currentCard) {
      const displayPokies = pokemon[type.name].map(pokie => (
        <div key={pokie.id}>
          <h4>{pokie.name}</h4>
        </div>
      ));
      content = (
        <div>
          <h3 onClick={this.handleClick}>{type.name}</h3>
          {displayPokies}
        </div>
      );
    } else {
      content = <h3 onClick={this.handleClick}>{type.name}</h3>;
    }

    return <div>{content}</div>;
  }
}

PokeCard.propTypes = {
  type: PropTypes.object.isRequired,
  addPokemonToState: PropTypes.func.isRequired,
  setCurrentCard: PropTypes.func.isRequired,
  pokemon: PropTypes.object.isRequired
};

export const mapStateToProps = state => ({
  currentCard: state.currentCard,
  pokemon: state.pokemon
});

export const mapDispatchToProps = dispatch => ({
  addPokemonToState: pokies => dispatch(addPokemonToState(pokies)),
  setCurrentCard: typeName => dispatch(setCurrentCard(typeName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeCard);
