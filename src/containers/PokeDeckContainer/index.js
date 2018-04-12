import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as apiCalls from '../../helpers/apiCall.js';
import Card from '../../components/Card';
import Lists from '../../components/Lists';
import './styles.css';

export class PokeDeckContainer extends Component {

  getPokemonType = async () => {
    try {
      const pokemon = await apiCalls.getTypes();
      this.props.setTypes(pokemon);
    } catch (error) {
      throw error
    }
    
  }

  getPokemonInfo = async (pokemonIds) => {
    try  {
      const pokemon = await apiCalls.getPokemon(pokemonIds);
    
      this.props.addPokemons(pokemon);
    } catch (error) {
      throw error
    }
    
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
  types: PropTypes.array,
  setTypes: PropTypes.func,
  pokemons: PropTypes.array,
  addPokemons: PropTypes.func

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
