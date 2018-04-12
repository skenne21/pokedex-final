import * as apiCalls from './apiCall';
import * as mocks from './mockData';

describe('Apicalls', () => {
  describe('getTypes', () => { 
    let url, types;

    beforeEach(() => {
      types = mocks.types;
      url = 'http://localhost:3001/types';
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(types)
        })
      ))
    });

    it('Should fetch with the right params', () => {
      apiCalls.getTypes()
      expect(window.fetch).toHaveBeenCalledWith(url)
    });

    it.skip('Should return a clean array with types inside it', async () => {
      const expected = mocks.types;
      const called = await apiCalls.getTypes();
      expect(called).toEqaul(expected)
    });

    it('Should throw an error if the status is above 200', () => {
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.reject({
          status: 500,
          message: 'error happened'
        })
      ));

      const expected = {
        status: 500,
        message: 'error happened'
      };

      const called = apiCalls.getTypes();
      expect(called).rejects.toEqual(expected);
    });
  });

  describe('getPokemons', () => {
    it.skip("Should return an array of clean pokemons", async () => {
      const ids = ['1']
      const expected = mocks.pokemons;
      const called = await apiCalls.getPokemon(ids);
      expect(called).toEqual(expected);
    })
  })

  describe('fetchPokemon', () => {
    let url, pokemons;
    beforeEach(() => {
      url = 'http://localhost:3001/pokemon/1';
      pokemons = mocks.pokemons
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(pokemons)
        })
      ));
    });

    it('Should fetch with the right url', () => {
      apiCalls.fetchPokemon(1)
      expect(window.fetch).toHaveBeenCalledWith(url)
    });

     it.skip('Should return a pokemon', async () => {
      const expected = mocks.pokemon;
      const called = await apiCalls.fetchPokemon(1);
      expect(called).toEqaul(expected)
    });

     it('Should throw an error if the status is above 200', () => {
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.reject({
          status: 500,
          message: 'error happened'
        })
      ));

      const expected = {
        status: 500,
        message: 'error happened'
      };

      const called = apiCalls.fetchPokemon();
      expect(called).rejects.toEqual(expected);
    })
  })
})