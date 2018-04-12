import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';
import * as mocks from '../../helpers/mockData';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card
        type={mocks.types}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})