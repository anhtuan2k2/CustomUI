import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from '@screens/Home';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
