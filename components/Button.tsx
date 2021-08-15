import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type ButtonProps = {
  text: string,
  style?: any,
  onPress?: any,
  secondary?: boolean
}

const Button = ({ text, style, onPress, secondary = false }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonContainer, style]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#29335C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#ececec',
    fontSize: 20,
    fontFamily: "montserrat",
    fontWeight: "600",
  }
})

export default Button