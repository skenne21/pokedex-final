import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';
import * as mocks from '../../helpers/mockData';

describe('Card', () => {
  let wrapper, mockGetPokemonInfo;

  beforeEach(() => {
    mockGetPokemonInfo = jest.fn();

    wrapper = shallow(
      <Card
        getPokemonInfo={mockGetPokemonInfo}
        type={mocks.types}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('Should pass a pokemon when the button is cliked to getPokemonInfo', () => {
    const pokemon = mocks.types[0].pokemon;
    wrapper.find('button').simulate('click');
    expect(mockGetPokemonInfo).toHaveBeenCalledWith(pokemon)
  })
})