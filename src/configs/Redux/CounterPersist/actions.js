import { PERSIST_INCREMENT, PERSIST_DECREMENT } from "./types";

export const increaseCounterPersist = () => {
  return {
    type: PERSIST_INCREMENT,
  };
};

export const decreaseCounterPersist = () => {
  return {
    type: PERSIST_DECREMENT,
  };
};
