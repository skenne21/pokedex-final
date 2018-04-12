import * as actions from './index';
import * as mocks from '../helpers/mockData';

describe('setType actions', () => {
  it('Should create a types', () => {
   const types = mocks.types;
    const expected = {
      type:"SET_TYPES",
      types
    }; 
    const called = actions.setTypes(types)
    expect(called).toEqual(expected);
  })
  

})
