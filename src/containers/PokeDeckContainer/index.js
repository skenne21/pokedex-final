import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as apiCalls from '../../helpers/apiCall.js';
import Card from '../../components/Card';

export class PokeDeckContainer extends Component {

  getPokemonType = async () => {
    const pokemon = await apiCalls.getPokemon();
    this.props.setTypes(pokemon);
  }

  getType = (pokemon) => {
    console.log(pokemon)
  }

  createCards = () => {
    return this.props.types.map((type) => {
      return (
        <Card 
          key={type.iod} 
          type={type} 
          getType={this.getType}
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
  types: shape({ types: string }),
  setTypes: func.isRequired
};

export const mapStateToProps = ({ types }) => ({
 types
});

export const mapDispatchToProps = dispatch => ({ 
  setTypes: (pokemon) => dispatch(actions.setTypes(pokemon))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeDeckContainer);
