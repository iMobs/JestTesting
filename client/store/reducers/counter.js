import * as constants from '../constants/counter';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };

    case constants.DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};
