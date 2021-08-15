import React from 'react'
import { StyleSheet, ScrollView } from 'react-native';

type WalletsContainerProps = {
  children: any
}

const WalletsContainer = ({ children }: WalletsContainerProps) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    style={styles.container}>
    {children}
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingLeft: 30,
  }
})

export default WalletsContainer