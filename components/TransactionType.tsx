import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native'

type TransactionTypeProps = {
  secondary?: boolean,
  active?: boolean,
  name: string,
  onPress?: any,
}

const TransactionType = ({ onPress, secondary = false, active = false, name }: TransactionTypeProps) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.tt_item, secondary && styles.tt_item_sec, !active && styles.tt_item_unsel]}>
      <Text style={[styles.tt_item_text, secondary && styles.tt_item_sec_text, !active && styles.tt_item_unsel_text]}>{name}</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  tt: {
    width: "100%",
    paddingHorizontal: 30,
    height: 40,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  tt_item: {
    width: "45%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "palegreen",
    borderRadius: 10,
  },
  tt_item_text: {
    color: "green",
    fontFamily: "montserrat"
  },
  tt_item_sec: {
    backgroundColor: "#E08A8E",
  },
  tt_item_sec_text: {
    color: "#611A1C",
  },
  tt_item_unsel: {
    backgroundColor: "#dcdcdc"
  },
  tt_item_unsel_text: {
    color: "#777"
  }
})

export default TransactionType