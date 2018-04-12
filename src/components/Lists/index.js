import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Lists = ({pokemons}) => {

  const createLists = pokemons.map( (pokemon, index) => {
    return (
      <div key={pokemon.name+index}>
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

Lists.propTypes = {
  pokemons:PropTypes.array
}

export default Lists;