import React from 'react';

const Lists = ({pokemons}) => {

  const createLists = pokemons.map(pokemon => console.log(pokemon))

  return (
    <div>
      <ol>
        {createLists}
      </ol>
    </div>
  )
}

export default Lists;