import * as actions from '../actions';
import typeReducer from './typeReducer';
import * as mocks from '../helpers/mockData'

describe('typeReducer', () => {
  it('should return a defualt state if action is undefined', () => {
    const expected = [];
    const called = typeReducer(undefined, {});
    expect(called).toEqual(expected);
  });

  it('Should return a new state with pokemon types inside it if action type is SET_TYPE', () => {
    const expected = mocks.types;
    const types = mocks.types;
    const called = typeReducer(actions.setTypes(types));

    expect(called).toEqual(expected)
  });
})