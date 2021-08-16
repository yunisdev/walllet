import * as types from './actionTypes'
import { State, Action } from './types'

const initialState: State = {
  wallets: [],
  activeWallet: undefined,
  transactions: []
}

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case types.CREATE_TRANSACTION:
      var transacs = state.transactions
      transacs.push(action.payload)
      return { ...state, transactions: transacs }
    case types.DELETE_TRANSACTION:
      var transacs = state.transactions
      transacs = transacs.filter(value => value.id !== action.payload.id)
      return { ...state, transactions: transacs }
    case types.CREATE_WALLET:
      var wallets = state.wallets
      wallets.push(action.payload)
      return { ...state, wallets, activeWallet: action.payload.id }
    case types.DELETE_WALLET:
      var wallets = state.wallets
      wallets = wallets.filter(value => value.id !== action.payload.id)
      return { ...state, wallets }
    case types.CHANGE_ACTIVE_WALLET:
      return { ...state, activeWallet: action.payload.id }
    default:
      return state
  }
}

export default reducer