import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './HomeScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import HistoryScreen from './screens/HistoryScreen';

const Drawer = createDrawerNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                {/* <Drawer.Screen name="Settings" component={SettingsScreen} />
                <Drawer.Screen name="History" component={HistoryScreen} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
