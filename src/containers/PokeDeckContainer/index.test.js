import React from 'react';
import { shallow } from 'enzyme';
import { PokeDeckContainer } from './index';
import { mapStateToProps, mapDispatchToProps } from './index';
import * as actions from '../../actions';
import * as apicalls from '../../helpers/apiCall';
import * as mocks from '../../helpers/mockData';

jest.mock('../../helpers/apiCall');

describe('PokeDeckContainer', () => {
  let wrapper, setTypes, types;

  beforeEach(() => {
    setTypes = jest.fn();
    types = mocks.types;
    wrapper = shallow(
      <PokeDeckContainer
        setTypes={setTypes}
        types={types}
      />
    )
  });

  it('Should match the snap shot if there is not any types', () => {
    wrapper = shallow(
      <PokeDeckContainer
        setTypes={setTypes}
        types={[]}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });

  it('Should match the snapshot if the types have length', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call getPokemonType method on component did mount', () => {
    const spy = jest.spyOn(wrapper.instance(), 'getPokemonTypes');
    wrapper.instance.componentDidMount();
    expect(spy).toHaveBeenCalled();
  })

  it.skip('should call getPokemonInfo with the right params', () => {
    const ids = ['1'];
    const expected = ['1'];
    const called = wrapper.instance.getPokemonInfo(ids);
    expect(called).toHaveBeenCalledWith(expected);
  })

  describe('mapStateToProps', () => {
    let expectedState, mappedState;

    beforeEach(() => {
      expectedState = {
       types:[],
       pokemons: []
      };
      mappedState = { 
        types: [],
        pokemons: []
      };
    });

    it('Should map types to state', () => {
      const types = mocks.types
      expectedState.types = types;
      mappedState.types = types;
      const called = mapStateToProps(mappedState)
      expect(called).toEqual(expectedState)
    });

    it('Should map pokemons to state', () => {
      const pokemons = mocks.pokemons
      expectedState.pokemons = pokemons;
      mappedState.pokemons = pokemons;
      const called = mapStateToProps(mappedState)
      expect(called).toEqual(expectedState)
    });
  });

  describe('mapDispatchToProps', () => {
    let mockedDispatch, mapped;

    beforeEach(() => {
      mockedDispatch = jest.fn(); 
      mapped = mapDispatchToProps(mockedDispatch);
    });

    it('Should call dispatch with the right params', () => {
      const types = mocks.types;
      const called = mapped.setTypes(types);
      const expected = actions.setTypes(types);

      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });

    it('Should call dispatch with the right params', () => {
      const pokemons = mocks.pokemons;
      const called = mapped.addPokemons(pokemons);
      const expected = actions.addPokemon(pokemons);

      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    })
  });
});