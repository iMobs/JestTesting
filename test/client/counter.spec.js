import reducer, { incrementCounter, decrementCounter } from '../../client/store/modules/counter';

describe('counter', () => {
  describe('reducer', () => {
    it('should have an initial state', () => {
      expect(reducer(undefined, {})).toEqual({ count: 0 });
    });

    it('should increment the count', () => {
      expect(reducer(undefined, { type: 'counter/INCREMENT' })).toEqual({ count: 1 });
    });

    it('should decrement the count', () => {
      expect(reducer(undefined, { type: 'counter/DECREMENT' })).toEqual({ count: -1 });
    });

    xit('should increment the counter', () => {
    });
  });
  describe('actions', () => {
    it('creates INCREMENT', () => {
      expect(incrementCounter()).toEqual({ type: 'counter/INCREMENT' });
    });

    it('creates DECREMENT', () => {
      expect(decrementCounter()).toEqual({ type: 'counter/DECREMENT' });
    });
  });
});
