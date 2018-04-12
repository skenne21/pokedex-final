import pokemonReducer from './pokemonReducer';
import * as actions from '../actions';
import * as mocks from '../helpers/mockData';

describe('pokemonReducer', () => {
  it('Should return the default state if action is undefined', () => {
    const expected = [];
    const called = pokemonReducer(undefined, {});
    expect(called).toEqual(expected);
  });

  it('Should return a new state with pokemon in it if action is addPokemon', () => {
    const expected = mocks.pokemons;
    const pokemons = mocks.pokemons;
    const called = pokemonReducer(undefined, actions.addPokemon(pokemons));
    expect(called).toEqual(expected);
   })
})