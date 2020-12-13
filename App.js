import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './app/screens/MainScreen';
import DrAbcScreen from './app/screens/DrAbcScreen';
import ToolsScreen from './app/screens/ToolsScreen';

const RootStack = createStackNavigator();

export default function App() {
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