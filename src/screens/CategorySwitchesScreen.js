import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CategorySwitchesScreen() {
  return (
    <View style={styles.category}>
      <Text>Category Switches screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategorySwitchesScreen;
