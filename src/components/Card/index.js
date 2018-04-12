import React from 'react';

const Card = ({ type, getPokemonInfo, pokemons }) => {
  console.log(pokemons)
  const { name, pokemon } = type
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={ () => getPokemonInfo(pokemon)}></button>
    </div>
  )

}

export default Card