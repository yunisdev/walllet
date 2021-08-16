import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

import mainReducer from './reducer'

const rootReducer = combineReducers({
  main: persistReducer(persistConfig, mainReducer)
})

const store: Store<any, AnyAction> = createStore(rootReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export {
  store,
  persistor
}