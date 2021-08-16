import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './Button'
import { useDispatch } from 'react-redux';
import { createWallet } from '../store/actions';

const CreateCard = () => {
  const [newWalletName, setNewWalletName] = useState('')
  const dispatch = useDispatch()

  const handleWalletCreate = () => {
    dispatch(createWallet(newWalletName))
    setNewWalletName('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TextInput placeholder="New wallet..." defaultValue={newWalletName} onChangeText={setNewWalletName} style={styles.input} />
        <Button onPress={handleWalletCreate} text="Create" />
      </View>
    </View>
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
    // backgroundColor: "#fff",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: 150,
    width: 230,
    padding: 15,
  },
  input: {
    backgroundColor: "white",
    marginBottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: "montserrat",
    width: "100%",
    borderRadius: 10,
  },
})

export default CreateCard