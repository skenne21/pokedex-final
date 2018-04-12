import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
class PokeDeckContainer extends Component {

  

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
  getPokemon: (pokemon) => dispatch(actions.getPokemon(pokemon))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeDeckContainer);
