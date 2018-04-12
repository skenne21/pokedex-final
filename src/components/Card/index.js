import React from 'react';
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

export default Card