import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Card = ({ type, getPokemonInfo}) => {
  const { name, pokemon } = type
  return (
    <div className='Card'>
      <h1>{name}</h1>
      <button onClick={ () => getPokemonInfo(pokemon)}>Click For Pokemons</button>
    </div>
  )

}

Card.propTypes = {
  type: PropTypes.array,
  getPokemonInfo: PropTypes.func
}

export default Card