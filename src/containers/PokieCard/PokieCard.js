import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPokemonByType } from '../../utils/apiCalls';
import { addPokemonToState } from '../../actions/pokemonActions';
import { setCurrentCard } from '../../actions/currentCardActions';

import PokieInfo from '../../components/PokieInfo/PokieInfo';

import './PokieCard.css';

export class PokieCard extends Component {
  handleClick = async () => {
    const { type, addPokemonToState, setCurrentCard, pokemon } = this.props;

    if (!Object.keys(pokemon).includes(type.name)) {
      const pokies = await getPokemonByType(type.pokemon);
      const pokieObj = {
        [type.name]: pokies
      };
      addPokemonToState(pokieObj);
    }

    setCurrentCard(type.name);
  };

  render() {
    const { type, currentCard, pokemon } = this.props;
    let content;

    if (type.name === currentCard) {
      content = (
        <div>
          <h3 onClick={this.handleClick}>{type.name}</h3>
          <PokieInfo pokemon={pokemon[type.name]} />
        </div>
      );
    } else {
      content = <h3 onClick={this.handleClick}>{type.name}</h3>;
    }

    return <div className="pokie-card">{content}</div>;
  }
}

PokieCard.propTypes = {
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
)(PokieCard);
