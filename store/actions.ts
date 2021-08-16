import * as types from './actionTypes'
import { v4 as uuid } from 'uuid'

export const makeTransaction = (type: "income" | "expense", description: string, amount: number, wallet_id: string) => ({
  type: types.CREATE_TRANSACTION,
  payload: {
    type, description, wallet_id, amount, id: uuid(), date: new Date()
  }
})

export const deleteTransaction = (id: string) => ({
  type: types.DELETE_TRANSACTION,
  payload: {
    id
  }
})

export const createWallet = (name: string) => ({
  type: types.CREATE_WALLET,
  payload: {
    name, id: uuid()
  }
})

export const deleteWallet = (id: string) => ({
  type: types.DELETE_WALLET,
  payload: {
    id
  }
})

export const changeActiveWallet = (id: string) => ({
  type: types.CHANGE_ACTIVE_WALLET,
  payload: {
    id
  }
})