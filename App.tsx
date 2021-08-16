
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, StatusBar, Platform } from 'react-native';
import Button from './components/Button'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Wallets from './screens/Wallets'
import Transaction from './screens/Transaction'

import { store, persistor } from './store/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const getFonts = () => Font.loadAsync({
  'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'montserrat-italic': require('./assets/fonts/Montserrat-Italic.ttf'),
  'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'montserrat-bold-italic': require('./assets/fonts/Montserrat-BoldItalic.ttf'),
  'montserrat': require('./assets/fonts/Montserrat-Medium.ttf'),
})


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="#29335C"
      inactiveColor="#ABB4D9"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen name="Wallets" component={Wallets} options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="wallet" color={color} size={26} />
      }} />
      <Tab.Screen name="Transaction" component={Transaction} options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="sync" color={color} size={26} />
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#29335C" />
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );

  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => { setFontsLoaded(true) }}
        onError={() => { }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
