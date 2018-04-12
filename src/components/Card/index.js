import React from 'react';

const Card = ({ type, getType }) => {
  const { name, pokemon } = type
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={ () => getType(pokemon)}></button>
    </div>
  )

}

export default Card