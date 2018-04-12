import * as mocks from '../mockData';

export const getPokemon = jest.fn()
  .mockImplementationOnce(() => {mocks.types})
  .mockImplementationOnce(() => {'error happened'})