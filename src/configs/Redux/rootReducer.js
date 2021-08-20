import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
//import reducer
import counterReducer from "./Counter/reducer";
import authReducer from "./Auth/reducer";
import messageReducer from "./Message/reducer";
import contohReducer from "./Contoh/reducer";
import counterPersistReducer from "./CounterPersist/reducer";
import navbarReducer from "./Navbar/reducer";
 
//persistConfig 
const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['counterPersist', 'auth', 'navbar', 'contoh']//reducer yang diaktifkan persistnya --> persist otomatis masuk ke localStorage
}

//Reducer di combine
const rootReducer = combineReducers({
  counter: counterReducer,
  counterPersist: counterPersistReducer, //persisted 
  auth: authReducer,
  message: messageReducer,
  contoh: contohReducer,
  navbar: navbarReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
