import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from "redux";
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: ExpoFileSystemStorage,
  whitelist: ['main']
};

const mainConfig = {
  key: 'main',
  storage: ExpoFileSystemStorage
}

import mainReducer from './reducer'

const rootReducer = combineReducers({
  main: persistReducer(mainConfig, mainReducer)
})

const store: Store<any, AnyAction> = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(thunk))
const persistor = persistStore(store)

export {
  store,
  persistor
}