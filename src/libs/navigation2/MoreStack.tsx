import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import MoreScreen from '@screens3/More';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ShoppingCart"
      component={MoreScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
