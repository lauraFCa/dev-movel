import React, { useState } from 'react';
import {
  Pressable,
  View,
  Text,
  Button,
  TextInput,
  ProgressBarAndroid,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/Home';
import Settings from './src/Settings';
import History from './src/History';



const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Historico" component={History} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
