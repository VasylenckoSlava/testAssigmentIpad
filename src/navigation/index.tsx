import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// components
import FirstScreen from '../screens/first';
import SecondScreen from '../screens/second';

type RootStackParamList = {
  First: undefined;
  Second: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AuthNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="First">
      <Stack.Screen
        name="First"
        component={FirstScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Second"
        component={SecondScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
