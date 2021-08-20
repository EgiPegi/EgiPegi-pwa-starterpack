import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; // redux-persist kalo mau storenya presist, tidak hilang meskipun di refresh

import thunk from "redux-thunk";
import persistReducer from "./rootReducer"; // Root reducer
const middleware = [thunk];

const store = createStore(
  persistReducer, // pass the persisted reducer instead of rootReducer to createStore
  applyMiddleware(...middleware) // add any middlewares here
);

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };
