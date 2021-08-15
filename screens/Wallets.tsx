import React from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Card from '../components/Card'
import WalletsContainer from '../components/WalletsContainer'
import History from '../components/History';

export default function Wallets() {
  return (
    <SafeAreaView style={styles.container}>
      <WalletsContainer>
        <Card color="mediumpurple" name="Kassa" />
        <Card color="#29335C" name="Kritibytes" active />
        <Card color="gold" name="Musiqi" />
      </WalletsContainer>
      <View style={styles.money_container}>
        <Text style={styles.money_desc}>Balance</Text>
        <Text style={styles.money_text}>₼300.00</Text>
      </View>
      <History.Container>
        <History.Item description="Hədiyyə" money={150} />
        <History.Item description="Kompüter" money={-1100.00} />
        <History.Item description="Hədiyyə" money={150} />
        <History.Item description="Kompüter" money={-1100.00} />
        <History.Item description="Hədiyyə" money={150} />
        <History.Item description="Kompüter" money={-1100.00} />
        <History.Item description="Hədiyyə" money={150} />
        <History.Item description="Kompüter" money={-1100.00} />
        <History.Item description="Hədiyyə" money={150} />
        <History.Item description="Hədiyyə" money={150} />
        <History.Item description="Hədiyyə" money={150} />
      </History.Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    display: "flex",
    flexDirection: 'column',
  },
  money_container: {
    height: 100,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  money_desc: {
    fontSize: 23,
    fontFamily: "montserrat",
    color: "#888"
  },
  money_text: {
    fontSize: 36,
    fontFamily: "montserrat",
    color: "#29335C"
  }
})