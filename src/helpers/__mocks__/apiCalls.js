import * as mocks from '../mockData';

export const getTypes = jest.fn()
  .mockImplementationOnce(() => {mocks.types})
  .mockImplementationOnce(() => {'error happened'})

export const getPokemon = jest.fn.mockImplementation(() => {mocks.pokemons});

export const fetchPokmon = jest.fn
  .mockImplementationOnce(() => {mocks.pokemon})
  .mockImplementationOnce(() => {'error happened'})
  