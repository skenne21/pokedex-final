import * as actions from '../actions';
import typeReducer from './typeReducer';
import * as mocks from '../helpers/mockData'

describe('typeReducer', () => {
  it('should return a defualt state if action is undefined', () => {
    const expected = [];
    const called = typeReducer(undefined, {});
    expect(called).toEqual(expected);
  });

  it('Should return a new state with pokemon types in it', () => {
    const types = mocks.types;
    const expected = mocks.types;
    const called = typeReducer(undefined, actions.setTypes(types));
    expect(called).toEqual(types);
  })
})