import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

type DeleteButtonProps = {
  handler: any,
  style?: any,
  text?: string
}

const DeleteButton = ({ handler, style, text }: DeleteButtonProps) => {
  const handleDelete = () => {
    handler()
  }

  return (
    <TouchableOpacity onPress={handleDelete}>
      <View style={[styles.delete, style]}>
        <MaterialCommunityIcons name="trash-can" color="white" size={15} />{text && <Text style={styles.text}> {text}</Text>}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  delete: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "montserrat",
    color:"white"
  }
})

export default DeleteButton