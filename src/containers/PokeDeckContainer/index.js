import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as apiCalls from '../../helpers/apiCall.js';
import Card from '../../components/Card';

class PokeDeckContainer extends Component {

  getPokemonType = async () => {
    const pokemon = await apiCalls.getPokemon();
    this.props.setTypes(pokemon);
  }


  createCards = () => {
    return this.props.types.map((type) => {
      return (
        <Card 
          key={type.iod} 
          type={type} 
        />
      )
    });
  }

  componentDidMount() {
   this.getPokemonType()
  }

  render() {
    const { types } = this.props;
    return (
      <div>
        <button onClick={()=> {
          this.props.getPokemon()
          alert('FAKE')
        }}> FAKE </button>
        {
          types.length ? this.createCards() : <img src="../../../public/pikachu.gif"/>
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
