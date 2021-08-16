import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Card from '../components/Card'
import WalletsContainer from '../components/WalletsContainer'
import History from '../components/History';
import { useSelector } from 'react-redux';
import { State } from '../store/types';
import CreateCard from '../components/CreateCard';

export default function Wallets() {
  const state: State = useSelector((state: any) => state.main)
  const [balance, setBalance] = useState(0)

  const { transactions, activeWallet, wallets } = state

  useEffect(() => {
    var moneySum = 0
    var ts = transactions.filter(value => value.wallet_id === (activeWallet || ""))
    for (var i = 0; i < ts.length; i++) {
      moneySum += ts[i].amount * (ts[i].type === "income" ? 1 : -1)
    }
    setBalance(moneySum)
  }, [state])

  return (
    <SafeAreaView style={styles.container}>
      <WalletsContainer>
        {
          wallets.map((value, index) => (
            <Card key={index} wallet_id={value.id} color="#29335C" name={value.name} active={value.id === activeWallet} />
          ))
        }

        <CreateCard />
      </WalletsContainer>
      <View style={styles.money_container}>
        {
          !activeWallet
            ? <Text style={styles.money_desc}>There is not active wallet</Text>
            : (<>
              <Text style={styles.money_desc}>Balance</Text>
              <Text style={styles.money_text}>₼{balance.toFixed(2)}</Text>
            </>)
        }

      </View>
      <History.Container>
        {
          transactions.filter(value => value.wallet_id === (activeWallet || "")).map((value, index) => (
            <History.Item key={index} transaction_id={value.id} date={value.date} description={value.description} money={value.amount * (value.type === "income" ? 1 : -1)} />
          ))
        }
      </History.Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    display: "flex",
    flexDirection: 'column',
  },
  money_container: {
    height: 100,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  money_desc: {
    fontSize: 23,
    fontFamily: "montserrat",
    color: "#888"
  },
  money_text: {
    fontSize: 36,
    fontFamily: "montserrat",
    color: "#29335C"
  }
})