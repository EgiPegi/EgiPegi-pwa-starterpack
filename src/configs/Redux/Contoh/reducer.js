import {
    CREATE_CONTOH,
    RETRIEVE_CONTOH,
    UPDATE_CONTOH,
    DELETE_CONTOH,
    DELETE_ALL_CONTOH,
  } from "./types";
  
  const initialState = [];
  
  const contohReducer = (contoh = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_CONTOH:
        return [...contoh, payload];
  
      case RETRIEVE_CONTOH:
        return payload;
  
      case UPDATE_CONTOH:
        return contoh.map((cnth) => {
          if (cnth.id === payload.id) {
            return {
              ...cnth,
              ...payload,
            };
          } else {
            return cnth;
          }
        });
  
      case DELETE_CONTOH:
        return contoh.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_CONTOH:
        return [];
  
      default:
        return contoh;
    }
  };
  
  export default contohReducer;