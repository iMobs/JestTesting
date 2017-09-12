import reducer from '../../client/store/reducers/counter';
import { incrementCounter, decrementCounter } from '../../client/store/actions/counter';
import * as constants from '../../client/store/constants/counter';

describe('counter', () => {
  describe('reducer', () => {
    it('should have an initial state', () => {
      expect(reducer(undefined, {})).toEqual({ count: 0 });
    });

    it('should increment the count', () => {
      expect(reducer(undefined, { type: constants.INCREMENT_COUNTER })).toEqual({ count: 1 });
    });

    it('should decrement the count', () => {
      expect(reducer(undefined, { type: constants.DECREMENT_COUNTER })).toEqual({ count: -1 });
    });

    xit('should increment the counter', () => {
    });
  });
  describe('actions', () => {
    it('creates INCREMENT', () => {
      expect(incrementCounter()).toEqual({ type: constants.INCREMENT_COUNTER });
    });

    it('creates DECREMENT', () => {
      expect(decrementCounter()).toEqual({ type: constants.DECREMENT_COUNTER });
    });
  });
});
