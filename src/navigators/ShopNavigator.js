import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategorySwitchesScreen from '../screens/CategorySwitchesScreen';
import SwitchDetailsScreen from '../screens/SwitchDetailsScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={CategoriesScreen} />
        <Stack.Screen name='List' component={CategorySwitchesScreen} />
        <Stack.Screen name='Detail' component={SwitchDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
