export interface Wallet {
  id: string,
  name: string
}

export interface Transaction {
  id: string,
  type: "income" | "expense",
  amount: number,
  description: string,
  wallet_id: string,
  date: Date
}

export interface State {
  wallets: Wallet[],
  activeWallet: string | undefined,
  transactions: Transaction[]
}

export interface Action {
  type: string,
  payload: any//Transaction | Wallet | { id: string }
}