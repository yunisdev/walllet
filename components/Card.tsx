import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { changeActiveWallet } from '../store/actions';

type CardProps = {
  color: string,
  name: string,
  active?: boolean,
  wallet_id: string,
}

const Card = ({ wallet_id, color, name, active = false }: CardProps) => {
  const dispatch = useDispatch()

  const handleWalletPress = ()=>{
    dispatch(changeActiveWallet(wallet_id))
  }

  return (
    <TouchableWithoutFeedback onPress={handleWalletPress}>
      <View style={styles.container}>
        <View style={[styles.body, active && styles.active]}>
          <MaterialCommunityIcons name="wallet" color={color} size={60} />
          <Text style={[styles.text, { color: color }]}>
            {name.length < 11
              ? `${name}`
              : `${name.substring(0, 9)}...`}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 230,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  body: {
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 150 / 1.13,
    width: 230 / 1.13,
    opacity: 0.7
  },
  active: {
    height: 150,
    width: 230,
    opacity: 1,
  },
  text: {
    fontSize: 30,
    fontFamily: 'montserrat-bold'
  }
})

export default Card