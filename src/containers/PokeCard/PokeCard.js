import React, { Component } from 'react';

class PokeCard extends Component {
  render() {
    const { type } = this.props;
    return (
      <div>
        <h1>{type.name}</h1>
      </div>
    );
  }
}

export default PokeCard;
