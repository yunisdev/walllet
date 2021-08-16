import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { changeActiveWallet, deleteWallet } from '../store/actions';
import DeleteButton from './DeleteButton';

type CardProps = {
  color: string,
  name: string,
  active?: boolean,
  wallet_id: string,
}

const Card = ({ wallet_id, color, name, active = false }: CardProps) => {
  const dispatch = useDispatch()

  const handleWalletPress = () => {
    dispatch(changeActiveWallet(wallet_id))
  }

  const handleWalletDelete = () => {
    dispatch(deleteWallet(wallet_id))
  }

  return (
    <TouchableWithoutFeedback onPress={handleWalletPress}>
      <View style={styles.container}>
        <View style={[styles.body, active && styles.active, {
          borderTopColor: color
        }]}>
          {/* <MaterialCommunityIcons name="wallet" color={color} size={40} /> */}
          <Text style={[styles.text, { color: color }]}>
            {name.length < 11
              ? `${name}`
              : `${name.substring(0, 9)}...`}
          </Text>
          <DeleteButton handler={handleWalletDelete} text="Delete" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 260,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  body: {
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    height: 150 / 1.13,
    width: 230 / 1.13,
    opacity: 0.7,
    display: "flex",
    flexDirection: "column",
    padding: 10,
    borderTopWidth: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  active: {
    height: 150,
    width: 230,
    opacity: 1,
  },
  text: {
    fontSize: 30,
    fontFamily: 'montserrat-bold',
  }
})

export default Card