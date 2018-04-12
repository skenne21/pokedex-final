import React from 'react';
import { shallow } from 'enzyme';
import Lists from './index';
import * as mocks from '../../helpers/mockData';

describe('Lists', () => {
  let wrapper, pokemons;

  beforeEach(() => {
    pokemons = mocks.pokemons
    wrapper = shallow(
      <Lists pokemons={pokemons} />
    );
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })


});