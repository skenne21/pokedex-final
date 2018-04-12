import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as apiCalls from '../../helpers/apiCall.js';
import Card from '../../components/Card';
import Lists from '../../components/Lists';
import './styles.css';

export class PokeDeckContainer extends Component {

  getPokemonType = async () => {
    const pokemon = await apiCalls.getTypes();
    this.props.setTypes(pokemon);
  }

  getPokemonInfo = async (pokemonIds) => {
    const pokemon = await apiCalls.getPokemon(pokemonIds);
    
    this.props.addPokemons(pokemon);
  }



  createCards = () => {
    return this.props.types.map((type) => {
      return (
        <Card 
          key={type.iod} 
          type={type}
          getPokemonInfo={this.getPokemonInfo}
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
      <div className="PokeDeckContainer">
        {
          types.length ? this.createCards() : <img src="../../../public/pikachu.gif"/>
        }
        <Lists pokemons={this.props.pokemons}/>

      </div>
    );
  }
}

PokeDeckContainer.propTypes = {
  types: shape({ types: string }),
  setTypes: func.isRequired
};

export const mapStateToProps = ({ types, pokemons }) => ({
  types,
  pokemons
});

export const mapDispatchToProps = dispatch => ({ 
  setTypes: (types) => dispatch(actions.setTypes(types)),
  addPokemons: pokemons => dispatch(actions.addPokemon(pokemons))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeDeckContainer);
