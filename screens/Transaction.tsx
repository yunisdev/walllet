import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Button from '../components/Button';
import TransactionType from '../components/TransactionType';
import CurrencyInput from 'react-native-currency-input';
import { useSelector, useDispatch } from 'react-redux';
import { makeTransaction } from '../store/actions';
import { State } from '../store/types';

export default function Transaction() {
  const [isIncomeSelected, setIsIncomeSelected] = useState<boolean>(false)
  const [money, setMoney] = useState<null | number>(null)
  const [description, setDescription] = useState<string>("")

  const dispatch = useDispatch()
  const state: State = useSelector((state: State): State => state)


  const handleSubmit = () => {
    var tType: "income" | "expense" = isIncomeSelected ? "income" : "expense"
    dispatch(makeTransaction(tType, description, money || 0, state.activeWallet || ""))
    // console.log(`You ${} budget ${(money || 0) * (isIncomeSelected ? 1 : -1)} for ${description}`)
  }

  return (
    <SafeAreaView>
      <Text style={styles.header}>Make Transaction</Text>
      <View style={styles.tt}>
        <TransactionType onPress={() => { setIsIncomeSelected(true) }} name="Income" active={isIncomeSelected} />
        <TransactionType onPress={() => { setIsIncomeSelected(false) }} name="Expense" secondary active={!isIncomeSelected} />
      </View>
      <TextInput placeholder="Description..." style={styles.input} onChangeText={setDescription} defaultValue={description} />
      <CurrencyInput
        placeholder="Amount of money..." style={styles.input}
        value={money}
        onChangeValue={(value) => setMoney(value)}
        prefix="₼"
        delimiter=","
        separator="."
        precision={2}
      />
      <View style={styles.button_container}>
        <Button onPress={handleSubmit} text="Submit" style={styles.button} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 30,
    marginTop: 30,
    fontSize: 50,
    fontFamily: 'montserrat-bold'
  },
  tt: {
    width: "100%",
    paddingHorizontal: 30,
    height: 40,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  input: {
    backgroundColor: "white",
    margin: 30,
    marginBottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: "montserrat"
  },
  button_container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 150,
    marginTop: 30,
  }
})