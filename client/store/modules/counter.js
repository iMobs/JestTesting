export const INCREMENT_COUNTER = 'counter/INCREMENT';
export const DECREMENT_COUNTER = 'counter/DECREMENT';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
});
