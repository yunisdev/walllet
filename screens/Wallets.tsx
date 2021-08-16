import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Card from '../components/Card'
import WalletsContainer from '../components/WalletsContainer'
import History from '../components/History';
import { useSelector } from 'react-redux';
import { State } from '../store/types';
import CreateCard from '../components/CreateCard';

export default function Wallets() {
  const state = useSelector((state: State) => state)
  const [balance, setBalance] = useState(0)

  const { transactions, activeWallet } = state

  console.log(transactions)
  console.log(activeWallet)

  useEffect(() => {
    var moneySum = 0
    for (var i = 0; i < transactions.length; i++) {
      moneySum += transactions[i].amount * (transactions[i].type === "income" ? 1 : -1)
    }
    setBalance(moneySum)
  }, [state])

  return (
    <SafeAreaView style={styles.container}>
      <WalletsContainer>
        <Card color="mediumpurple" name="Kassa" />
        <Card color="#29335C" name="Kritibytes" active />
        <Card color="gold" name="Musiqi" />
        <CreateCard />
      </WalletsContainer>
      <View style={styles.money_container}>
        <Text style={styles.money_desc}>Balance</Text>
        <Text style={styles.money_text}>₼{balance.toFixed(2)}</Text>
      </View>
      <History.Container>
        {
          transactions.filter(value => value.wallet_id === (activeWallet || "")).map((value, index) => (
            <History.Item key={index} date={value.date} description={value.description} money={value.amount * (value.type === "income" ? 1 : -1)} />
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