import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as apiCalls from '../../helpers/apiCall.js';

class PokeDeckContainer extends Component {

  getPokemonType = async () => {
    const pokemon = await apiCalls.getPokemon();
    this.props.setPokemon(pokemon)


  }

  componentDidMount() {
   this.getPokemonType()
  }

  render() {
    return (
      <div>
        <button onClick={()=> {
          this.props.getPokemon()
          alert('FAKE')
        }}> FAKE </button>
      </div>
    );
  }
}

PokeDeckContainer.propTypes = {
  pokemon: shape({ pokemon: string }),
  getPokemonAction: func.isRequired
};

const mapStateToProps = ({ pokemon }) => ({
 pokemon 
});

const mapDispatchToProps = dispatch => ({ 
  setPokemon: (pokemon) => dispatch(actions.setPokemon(pokemon))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeDeckContainer);
