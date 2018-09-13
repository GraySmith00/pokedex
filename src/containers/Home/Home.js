import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPokeTypes } from '../../utils/apiCalls';
import { setPokeTypesState } from '../../actions/typeActions';

class Home extends Component {
  async componentDidMount() {
    const pokeTypes = await getPokeTypes();
    this.props.setPokeTypesState(pokeTypes);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setPokeTypesState: pokeTypes => dispatch(setPokeTypesState(pokeTypes))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
