import { HIDE_NAVBAR } from "./types";

const INITIAL_STATE = {
  isHide: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HIDE_NAVBAR:
      return {
        ...state,
        isHide: !state.isHide,
      };

    default:
      return state;
  }
};

export default reducer;
