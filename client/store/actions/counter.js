import * as constants from '../constants/counter';

export const incrementCounter = () => ({
  type: constants.INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: constants.DECREMENT_COUNTER,
});
