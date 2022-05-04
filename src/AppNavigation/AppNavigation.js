import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';

const Stack = createNativeStackNavigator();

export default function AppNavigation({ AppState }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Home">
                    {props => <Home {...props} AppState={AppState} />}
                </Stack.Screen>

                <Stack.Screen name="Login">
                    {props => <Login {...props} AppState={AppState} />}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}