import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPokeTypes } from '../../utils/apiCalls';
import { setPokeTypesState } from '../../actions/typeActions';

import Loading from '../../components/Loading/Loading';
import CardList from '../CardList/CardList';

import './Home.css';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    const pokeTypes = await getPokeTypes();
    this.props.setPokeTypesState(pokeTypes);
    this.setState({ loading: false });
  }

  render() {
    let content;

    if (this.state.loading) {
      content = <Loading />;
    } else {
      content = (
        <div>
          <h1 className="header"> POKéDEX </h1>
          <CardList />
        </div>
      );
    }
    return <div className="container">{content}</div>;
  }
}

Home.propTypes = {
  setPokeTypesState: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  setPokeTypesState: pokeTypes => dispatch(setPokeTypesState(pokeTypes))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
