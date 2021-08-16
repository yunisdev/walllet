import React from 'react'
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native'

type ContainerProps = {
  children: any
}

type ItemProps = {
  money: number,
  description: string,
  date: Date
}

const Container = ({ children }: ContainerProps) => (
  <ScrollView style={styles.history}>
    {children}
  </ScrollView>
)

const Item = ({ description, money, date }: ItemProps) => {
  let moneyText = `${money < 0 ? "-" : ""} ₼${Math.abs(money).toFixed(2)}`

  return (
    <View style={styles.history_item}>
      <Text style={styles.description}>
        {description.length < 23
          ? `${description}`
          : `${description.substring(0, 21)}...`}
      </Text>

      <Text style={[styles.date]}>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>

      <Text style={[styles.money, money < 0 && styles.minus]}>{moneyText}</Text>
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
    color: "#666"
  },
  money: {
    fontFamily: 'montserrat-semibold',
    color: "green"
  },
  minus: {
    color: "orangered"
  },
  date: {
    fontFamily: 'montserrat-semibold',
    color: "#999"
  }
})