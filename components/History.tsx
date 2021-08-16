import React from 'react'
import { StyleSheet, ScrollView, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Button from './Button'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../store/actions';

type ContainerProps = {
  children: any
}

type ItemProps = {
  money: number,
  description: string,
  date: Date,
  transaction_id: string
}

const Container = ({ children }: ContainerProps) => (
  <ScrollView style={styles.history}>
    {children}
  </ScrollView>
)

const Item = ({ transaction_id, description, money, date }: ItemProps) => {
  let moneyText = `${money < 0 ? "-" : ""} ₼${Math.abs(money).toFixed(2)}`

  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteTransaction(transaction_id))

  return (
    <View style={styles.history_item}>
      <Text style={styles.description}>
        {description.length < 17
          ? `${description}`
          : `${description.substring(0, 15)}...`}
      </Text>

      <Text style={[styles.date]}>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>

      <Text style={[styles.money, money < 0 && styles.minus]}>{moneyText}</Text>

      <TouchableOpacity onPress={handleDelete}>
        <View style={styles.delete}>
          <MaterialCommunityIcons name="trash-can" color="white" size={15} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default {
  Container,
  Item
}

const styles = StyleSheet.create({
  history: {
    width: "100%",
    paddingHorizontal: 30,
    height: Dimensions.get("window").height - 420
  },
  history_item: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  description: {
    fontFamily: 'montserrat-semibold',
    color: "#666",
    flex: 2,
  },
  money: {
    fontFamily: 'montserrat-semibold',
    color: "green",
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  minus: {
    color: "orangered"
  },
  date: {
    fontFamily: 'montserrat-semibold',
    color: "#999",
    flex: 1,
    textAlign: 'center'
  },
  delete: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
})