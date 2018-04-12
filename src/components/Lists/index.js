import React from 'react';
import './styles.css'

const Lists = ({pokemons}) => {

  const createLists = pokemons.map(pokemon => {
    return (
      <div>
        <h1>{pokemon.name}</h1>
        <img src={`${pokemon.image}`}/>
        <h2>{pokemon.weight}</h2>
      </div>
    )
  })

  return (
    <div className='Lists'>
        {createLists}
    </div>
  )
}

export default Lists;