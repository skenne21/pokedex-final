import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as apiCalls from '../../helpers/apiCall.js';

class PokeDeckContainer extends Component {

  getPokemonType = async () => {
    const pokemon = await apiCalls.getPokemon();
    this.props.setTypes(pokemon);
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
        {
          this.props.types < 1 ? <img src="../../../pikachu.gif" /> : ''
        }
      </div>
    );
  }
}

PokeDeckContainer.propTypes = {
  pokemon: shape({ pokemon: string }),
  setTypes: func.isRequired
};

const mapStateToProps = ({ types }) => ({
 types
});

const mapDispatchToProps = dispatch => ({ 
  setTypes: (pokemon) => dispatch(actions.setTypes(pokemon))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeDeckContainer);
