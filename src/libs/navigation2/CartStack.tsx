import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import ShoppingCart from '@screens3/ShoppingCart';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ShoppingCart"
      component={ShoppingCart}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
