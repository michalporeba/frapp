import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';
import { Alert, Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './app/screens/MainScreen';
import DrAbcScreen from './app/screens/DrAbcScreen';
import ToolsScreen from './app/screens/ToolsScreen';

const RootStack = createStackNavigator();

export default function App() {
  const [isSomething, setIsSomething] = useState(true);
  const [searchText, setSearchText] = useState('');

  console.log("testing messages");
  let x = 1;
  console.log("executed");

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={MainScreen} options={{headerShown: false}}/>
        <RootStack.Screen name="DrAbc" component={DrAbcScreen} />
        <RootStack.Screen name="Tools" component={ToolsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  }
});
