import React from 'react';
import { shallow } from 'enzyme';
import { PokeDeckContainer } from './index';
import { mapStateToProps, mapDispatchToProps } from './index';
import * as actions from '../../actions';
import * as apicalls from '../../helpers/apiCall';
import * as mocks from '../../helpers/mockData';

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

  describe('mapStateToProps', () => {
    let expectedState, mappedState;
    
    beforeEach(() => {
      expectedState = { types:mocks.types };
      mappedState = { types:mocks.types };
    });
    
  });
});