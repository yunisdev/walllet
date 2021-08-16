import React from 'react'
import { View, StyleSheet, Text } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CreateCard = () => (
  <View style={styles.container}>
    <View style={styles.body}>
      <MaterialCommunityIcons name="plus-circle" color="#29335C" size={60} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 50,
  },
  body: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 100,
  }
})

export default CreateCard