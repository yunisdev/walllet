import { AnyAction, createStore, Store } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist:['wallets','transactions']
};

import reducer from './reducer'

const store: Store<any, AnyAction> = createStore(persistReducer(persistConfig, reducer))
const persistor = persistStore(store)

export {
  store,
  persistor
}