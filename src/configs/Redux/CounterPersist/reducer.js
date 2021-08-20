import { PERSIST_INCREMENT, PERSIST_DECREMENT } from "./types";

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PERSIST_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case PERSIST_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default reducer;
