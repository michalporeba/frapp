import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import eventReducer from './app/data/EventReducer';

import CheckInScreen from './app/screens/CheckInScreen';
import MainScreen from './app/screens/MainScreen';
import DrAbcScreen from './app/screens/DrAbcScreen';
import ToolsScreen from './app/screens/ToolsScreen';
import ChecklistScreen from './app/screens/ChecklistScreen';

const RootStack = createStackNavigator();
const store = createStore(eventReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={MainScreen} options={{headerShown: false}}/>
          <RootStack.Screen name="Check In" component={CheckInScreen} />
          <RootStack.Screen name="DrAbc" component={DrAbcScreen} />
          <RootStack.Screen name="Tools" component={ToolsScreen} />
          <RootStack.Screen name="Checklists" component={ChecklistScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}